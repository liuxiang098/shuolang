<?php
/*
店铺详情
*/
class ShopdetailsAction extends CommonAction
{
    public function _initialize(){
        parent::_initialize();
    }
    public function index(){
    	//接受建材店铺id
    	$id=I('get.shop_id');
		//商家店铺
		$shop=M('goods')->where("shop_id=$id")->limit(0,6)->select();
		// var_dump($shop);
		// exit;
		$this->assign('shop',$shop);
		$this->display();
	}
}