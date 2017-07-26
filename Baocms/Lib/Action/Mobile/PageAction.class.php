<?php
class PageAction extends CommonAction {
	public function index() {
		//装修的子分类
		$cate = M('shop_cate')->where(array('parent_id' => 2))->limit(9)->order('orderby asc')->select();
		$this->assign('cate', $cate);
		//文字菜单
		$nav = M('navigation')->where(array('status' => 5, 'closed' => 0))->limit(9)->order('orderby asc')->select();
		$this->assign('nav', $nav);
		//推荐商家
		$this->assign('shop_3', M('shop')->where(array('cate_id' => 3))->limit(6)->select());
		$this->assign('shop_8', M('shop')->where(array('cate_id' => 8))->limit(6)->select());
		$this->assign('shop_9', M('shop')->where(array('cate_id' => 9))->limit(3)->select());
		$this->assign('shop_11', M('shop')->where(array('cate_id' => 11))->limit(3)->select());
		
		$this->display();
	}
}