<?php



class AwardwinningAction extends CommonAction {

    private $create_fields = array('user_id', 'goods_id', 'name', 'mobile', 'randstr');
    private $edit_fields = array('user_id', 'goods_id', 'name', 'mobile', 'randstr');

    public function index() {
        $Awardwinning = D('Awardwinning');
        import('ORG.Util.Page'); // 导入分页类
        $map = array();
        $award_id = (int) $this->_get('award_id');
        if ($award_id) {
            $map['award_id'] = $award_id;
            $this->assign('award_id',$award_id);
        } else {
            $this->error('请选择您要设置的活动');
        }
        $count = $Awardwinning->where($map)->count(); // 查询满足要求的总记录数 
        $Page = new Page($count, 25); // 实例化分页类 传入总记录数和每页显示的记录数
        $show = $Page->show(); // 分页显示输出
        $list = $Awardwinning->where($map)->order(array('winning_id' => 'desc'))->limit($Page->firstRow . ',' . $Page->listRows)->select();
        
        $user_ids =  $goods_ids = array();
        foreach($list as $val){
            if(!empty($val['user_id'])){
                $user_ids[$val['user_id']] = $val['user_id'];
            }
            if(!empty($val['goods_id'])){
                $goods_ids[$val['goods_id']] = $val['goods_id'];
            }
        }
        
        $this->assign('users',D('Users')->itemsByIds($user_ids));
        $this->assign('goods',D('Awardgoods')->itemsByIds($goods_ids));
        $this->assign('list', $list); // 赋值数据集
        $this->assign('page', $show); // 赋值分页输出
        
        $this->display(); // 输出模板
    }

    public function create($award_id) {
        $award_id = (int) $award_id;
        if ($this->isPost()) {
            $data = $this->createCheck();
            $obj = D('Awardwinning');
            $data['award_id'] = $award_id;
            if ($obj->add($data)) {
                $this->baoSuccess('添加成功', U('awardwinning/index',array('award_id'=>$award_id)));
            }
            $this->baoError('操作失败！');
        } else {
            $this->assign('award_id', $award_id);
            $this->assign('goods',D('Awardgoods')->where(array('award_id'=>$award_id))->select());
            $this->display();
        }
    }

    private function createCheck() {
        $data = $this->checkFields($this->_post('data', false), $this->create_fields);
        $data['user_id'] = (int) $data['user_id'];
        $data['goods_id'] = (int) $data['goods_id'];
        if (empty($data['goods_id'])) {
            $this->baoError('商品不能为空');
        } $data['name'] = htmlspecialchars($data['name']);
        if (empty($data['name'])) {
            $this->baoError('姓名不能为空');
        } $data['mobile'] = htmlspecialchars($data['mobile']);
        if (empty($data['mobile'])) {
            $this->baoError('手机不能为空');
        }
        if (!isMobile($data['mobile'])) {
            $this->baoError('手机格式不正确');
        } 
        $data['randstr'] =rand(1,10000);
        $data['create_time'] = NOW_TIME;
        $data['create_ip'] = get_client_ip();
        return $data;
    }

    public function edit($winning_id = 0) {
        if ($winning_id = (int) $winning_id) {
            $obj = D('Awardwinning');
            if (!$detail = $obj->find($winning_id)) {
                $this->baoError('请选择要编辑的奖品名单');
            }
            if ($this->isPost()) {
                $data = $this->editCheck();
                $data['winning_id'] = $winning_id;
                if (false !== $obj->save($data)) {
                    $this->baoSuccess('操作成功', U('awardwinning/index', array('award_id' => $detail['award_id'])));
                }
                $this->baoError('操作失败');
            } else {
                $this->assign('detail', $detail);
                $this->assign('goods',D('Awardgoods')->where(array('award_id'=>$detail['award_id']))->select());

                $this->display();
            }
        } else {
            $this->baoError('请选择要编辑的奖品名单');
        }
    }

    private function editCheck() {
        $data = $this->checkFields($this->_post('data', false), $this->edit_fields);
        $data['user_id'] = (int) $data['user_id'];
        $data['goods_id'] = (int) $data['goods_id'];
        if (empty($data['goods_id'])) {
            $this->baoError('商品不能为空');
        } $data['name'] = htmlspecialchars($data['name']);
        if (empty($data['name'])) {
            $this->baoError('姓名不能为空');
        } $data['mobile'] = htmlspecialchars($data['mobile']);
        if (empty($data['mobile'])) {
            $this->baoError('手机不能为空');
        }
        if (!isMobile($data['mobile'])) {
            $this->baoError('手机格式不正确');
        } 
        $data['randstr'] =rand(1,10000);
        return $data;
    }

    public function delete($award_id, $winning_id = 0) {
        $award_id = (int) $award_id;
        if (is_numeric($winning_id) && ($winning_id = (int) $winning_id)) {
            $obj = D('Awardwinning');
            $obj->delete($winning_id);
            $this->baoSuccess('删除成功！', U('awardwinning/index', array('award_id' => $award_id)));
        } else {
            $winning_id = $this->_post('winning_id', false);
            if (is_array($winning_id)) {
                $obj = D('Awardwinning');
                foreach ($winning_id as $id) {
                    $obj->delete($id);
                }
                $this->baoSuccess('删除成功！', U('awardwinning/index', array('award_id' => $award_id)));
            }
            $this->baoError('请选择要删除的奖品名单');
        }
    }

}
