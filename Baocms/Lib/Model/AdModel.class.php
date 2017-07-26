<?php
class AdModel extends CommonModel{
    protected $pk   = 'ad_id';
    protected $tableName =  'ad';
	
	public function items($site_id) {
		$map = array(
			'site_id' => $site_id,
			'closed' => 0
		);
		$rs = $this->where($map)->order('orderby asc')->select();
		foreach($rs as $r) {
			$items[$r['ad_id']] = $r;
		}
		return $items;
	}
	
	public function item($ad_id){
		$map = array(
			'ad_id' => $ad_id,
			'closed' => 0
		);
		$rs = $this->where($map)->find();
		if($rs['code']) {
			return $rs['code'];
		} else {
			return  "<a href='{$rs[link_url]}'><img src='{$rs[photo]}'></a>";
		}
	}
}