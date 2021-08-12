<template>
	<view id="room-manage">
		<view class="content">
			<view class="item" v-for="item in list" :key="item.id">
				<text class="lable" @click="showModel('编辑剧本',item.id,item.roomName)">{{item.roomName}}</text>
				<image @click="showDel(item.id)" src="@/static/index/shopManger/del-icon.png"></image>
			</view>
		</view>
		<view class="save">
			<view @click="showModel('添加房间')">添加房间</view>
		</view>
		<!-- 删除房间弹框 -->
		<!-- 锁定车位弹框 -->
		<u-modal v-model="delFlag" :show-title="false"
			:show-cancel-button="true" confirm-color="#09BCAF" content="是否确认删除该房间？" @confirm="delConfirm"></u-modal>
		<!-- 添加房间弹窗 -->
		<u-modal @confirm="addConfirm" @cancel="addCancel" v-model="aShopShow" confirm-text="保存" cancel-text	="返回" :title="title" :show-cancel-button="true" confirm-color="#09BCAF">
			<view class="text-box">
				<view class="title">房间名称</view>
				<view class="textarea">
					<textarea v-model="shopName" placeholder="请输入房间名称" maxlength="160" />
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				title:"添加房间",
				delFlag:false,
				aShopShow:false,
				shopName:'',
				//编辑剧本id
				nId:null,
				list:[],
				delId:null
			}
		},
		onLoad() {
			this.queryHomeList()
		},
		methods:{
			showDel(id){
				this.delId = id
				this.delFlag = true
			},
			async delConfirm(){
				const {data:res} = await this.$request.request({
					url:"/v1/room/deleteRoom",
					method:"POST",
					data:{
						roomId:this.delId
					}
				})
				if(res.code==1){
					this.$toast("删除成功")
				}else{
					this.$toast("删除失败")
				}
				this.queryHomeList()
			},
			// 查询房间列表
			async queryHomeList(){
				this.homeList = []
				const {data:res} = await this.$request.request({
					url:"/v1/room/queryRoomList",
					method:"POST"
				})
				if(res.code==1){
					this.list = res.data
					console.log(this.list)
				}
			},
			// 展示房间框
			showModel(title,id=null,name=''){
				this.title = title
				this.nId = id
				this.aShopShow = true
				this.shopName = name
			},
			// 取消添加 or 编辑
			addCancel(){
				this.aShopShow = false
				setTimeout(_=>{
					this.nId = null
					this.shopName = ''
				},300)
			},
			// 添加 or 编辑
			async addConfirm(){
				if(!this.shopName.trim()) return this.$toast("名称不能为空")
				let data = {
					roomName:this.shopName
				}
				// 编辑
				if(this.nId){
					data.roomId = this.nId
					const {data:res} = await this.$request.request({
						url:"/v1/room/editRoom",
						method:"POST",
						data
					})
					if(res.code==1){
						this.$toast("修改成功")
					}
					this.queryHomeList()
				}else{
					// 添加
					const {data:res} = await this.$request.request({
						url:"/v1/room/addRoom",
						method:"POST",
						data
					})
					if(res.code==1){
						this.$toast("添加成功")
					}
					this.queryHomeList()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	#room-manage {
		position: relative;
		width: 100vw;
		height: calc(100vh - 88rpx);
		background-color: #fff;

		.content {
			box-sizing: border-box;
			width: 100%;
			height: 100%;

			.item {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				width: 750rpx;
				height: 104rpx;
				padding: 0 30rpx;
				border-bottom: 1rpx solid #eee;
				.lable {
					font-size: 28rpx;
					color: #333333;
					font-weight: 500;
					flex: 1;
				}
				image{
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
		
		.text-box {
			padding: 30rpx 30rpx 0;
			font-size: 28rpx;
			color: #666;
			.title{
				font-size: 26rpx;
				margin-bottom: 20rpx;
			}
			.textarea {
				position: relative;
				display: block;
				box-sizing: border-box;
				padding: 20rpx 20rpx 60rpx;
				border: 1rpx solid #eee;
		
				textarea {
					font-size: 28rpx;
					width: auto;
					height: 140rpx;
				}
			}
		
			.length {
				position: absolute;
				bottom: 20rpx;
				right: 20rpx;
			}
		}
		
		.save {
			position: absolute;
			bottom: 30rpx;
			left: 0;
			width: 100%;
			height: 88rpx;
			padding: 0 20rpx;

			view {
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				background-color: #09BCAF;
				text-align: center;
				border-radius: 750rpx;
				margin: 0 auto;
				color: #fff;
				font-size: 28rpx;
			}
		}
	}
</style>
