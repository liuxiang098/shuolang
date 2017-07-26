<?php
/*
装修模块
*/
class DecorationAction extends CommonAction
{
    public function _initialize(){
        parent::_initialize();
    }
    public function index()
    {
		// exit("正在开发中");
		$this->display("shj/index");
	}
}