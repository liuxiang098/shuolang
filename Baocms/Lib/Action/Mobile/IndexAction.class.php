<?php
class IndexAction extends CommonAction {
    public function index() {
		$this->assign('ad_57', D('Ad')->items(57));  //幻灯广告
		$this->assign('ad_187', D('Ad')->item(187));  //今日推荐
		$this->assign('ad_188', D('Ad')->item(188));  //四格广告

		// $list=D('Ad')->item(188);
		
		// var_dump($list);exit;


		//分类导航
		$Navigation = D('Navigation');
        $map = array();
		$map['status'] = 2;
		$nav = $Navigation->where($map)->order(array('orderby' => 'asc'))->limit(9)->select();
		$this->assign('nav',$nav);
		//视频展示
		$Video = D('Video');
		$map = array();
		$video_items = $Video->where($map)->order(array('orderby' => 'asc'))->limit(4)->select();
		$this->assign('video_items',$video_items);
		$Goods = D('Goods');
		$this->assign('goods_1', $Goods->items(1));  //硕琅果园
		$this->assign('goods_15', $Goods->items(15));  //硕琅e家社区便利店
		$this->assign('goods_18', $Goods->items(18));  //硕琅e家生态绿色食材
        $this->display();
    }
    public function search() {
        $keys = D('Keyword')->fetchAll();
        $keytype = D('Keyword')->getKeyType();
        $this->assign('keys',$keys);
        $this->display();
    }

	 public function dingwei() {
        $lat = $this->_get('lat', 'htmlspecialchars');
        $lng = $this->_get('lng', 'htmlspecialchars');
        cookie('lat', $lat);
        cookie('lng', $lng);
        echo NOW_TIME;
    }

	public function more() {
		$maps = array('status' => 2,'closed'=>0);
		$this->assign('nav',$nav = D('Navigation') ->where($maps)->order(array('orderby' => 'asc'))->select());
		$this->display();
	}

}

