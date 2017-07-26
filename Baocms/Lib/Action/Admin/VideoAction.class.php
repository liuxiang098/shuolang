<?php
class VideoAction extends CommonAction
{
    private $create_fields = array('title', 'photo', 'thumb', 'video_url', 'video_url', 'orderby');
    private $edit_fields = array('title', 'photo', 'thumb', 'video_url', 'video_url', 'orderby');
    public function index()
    {
        $Video = D('Video');
        import('ORG.Util.Page');
        $map = array('closed' => 0);
        $keyword = $this->_param('keyword', 'htmlspecialchars');
        if ($keyword) {
            $map['title'] = array('LIKE', '%' . $keyword . '%');
            $this->assign('title', $title);
        }

        $count = $Video->where($map)->count();
        $Page = new Page($count, 15);
        $show = $Page->show();
        $list = $Video->where($map)->order(array('orderby' => 'desc'))->limit($Page->firstRow . ',' . $Page->listRows)->select();
        $this->assign('list', $list);
        $this->assign('page', $show);
        $this->display();
    }
    public function tuan()
    {
        if (IS_AJAX) {
            $shop_id = $_POST['shop_id'];
            $list = D('Tuan')->where(array('shop_id' => $shop_id))->order('tuan_id asc')->select();
            $this->ajaxReturn(array('list' => $list));
        }
    }
    public function create()
    {
        if ($this->isPost()) {
            $data = $this->createCheck();
            $obj = D('Video');
            if ($obj->add($data)) {
                $this->baoSuccess('添加成功', U('index'));
            }
            $this->baoError('操作失败！');
        } else {
            $this->display();
        }
    }
    private function createCheck()
    {
        $data = $this->checkFields($this->_post('data', false), $this->create_fields);
        $data['title'] = htmlspecialchars($data['title']);
        if (empty($data['title'])) {
            $this->baoError('标题不能为空');
        }
        $data['photo'] = htmlspecialchars($data['photo']);
        if (!isImage($data['photo'])) {
            $this->baoError('请上传正确的图片');
        }
        $thumb = $this->_param('thumb', false);
        foreach ($thumb as $k => $val) {
            if (empty($val)) {
                unset($thumb[$k]);
            }
            if (!isImage($val)) {
                unset($thumb[$k]);
            }
        }
        $data['thumb'] = serialize($thumb);
        if ($words = D('Sensitive')->checkWords($data['title'])) {
            $this->baoError('标题含有敏感词：' . $words);
        }
        $data['orderby'] = (int) $data['orderby'];
        $data['create_time'] = NOW_TIME;
        $data['sign_num'] = 0;
        $data['create_ip'] = get_client_ip();
        return $data;
    }
	
    public function edit($id = 0)
    {
        if ($id = (int) $id) {
            $obj = D('Video');
            if (!($detail = $obj->find($id))) {
                $this->baoError('请选择要编辑的内容');
            }
            if ($this->isPost()) {
                $data = $this->editCheck();
                $data['id'] = $id;
                if (false !== $obj->save($data)) {
                    $this->baoSuccess('操作成功', U('index'));
                }
                $this->baoError('操作失败');
            } else {
                $thumb = unserialize($detail['thumb']);
                $this->assign('thumb', $thumb);
                $this->assign('detail', $detail);
                $this->display("create");
            }
        } else {
            $this->baoError('请选择要编辑的内容');
        }
    }
	
    private function editCheck()
    {
        $data = $this->checkFields($this->_post('data', false), $this->edit_fields);
        $data['orderby'] = (int) $data['orderby'];
        $data['title'] = htmlspecialchars($data['title']);
        if (empty($data['title'])) {
            $this->baoError('标题不能为空');
        }
        $data['photo'] = htmlspecialchars($data['photo']);
        if (!isImage($data['photo'])) {
            $this->baoError('请上传正确的图片');
        }
        $thumb = $this->_param('thumb', false);
        foreach ($thumb as $k => $val) {
            if (empty($val)) {
                unset($thumb[$k]);
            }
            if (!isImage($val)) {
                unset($thumb[$k]);
            }
        }
        $data['thumb'] = serialize($thumb);

        if ($words = D('Sensitive')->checkWords($data['title'])) {
            $this->baoError('标题含有敏感词：' . $words);
        }

        return $data;
    }
    public function delete($id = 0)
    {
        if (is_numeric($id) && ($id = (int) $id)) {
            $obj = D('Video');
            $obj->delete($id);
            $this->baoSuccess('删除成功！', U('index'));
        } else {
            $id = $this->_post('id', false);
            if (is_array($id)) {
                $obj = D('Video');
                foreach ($id as $id) {
                    $obj->delete($id);
                }
                $this->baoSuccess('删除成功！', U('index'));
            }
            $this->baoError('请选择要删除的内容');
        }
    }
}