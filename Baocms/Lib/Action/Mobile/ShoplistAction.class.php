<?php
/*
店铺列表
*/
class ShoplistAction extends CommonAction
{
    public function _initialize(){
        parent::_initialize();
    }
    public function index(){
    	$where=array();
        if(!empty($_POST['shopname'])){
            $where['shop_name']=array("like","%{$_POST['shopname']}%");
        }
        // var_dump($where);
		//商家店铺列表
		$shoplist = M('shop')->where($where)->select();
		// var_dump($shoplist);
		// exit;
		$this->assign('shop',$shoplist);
		$this->display();
	}
}