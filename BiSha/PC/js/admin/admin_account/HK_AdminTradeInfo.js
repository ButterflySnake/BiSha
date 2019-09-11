$(document).ready(function() {
    /*layui方面js*/
    layui.use(['form', 'table', 'element', 'laydate'], function() {
        var form = layui.form,
            layer = layui.layer,
            element = layui.element,
            laydate = layui.laydate,
            table = layui.table;
        /*日期部分*/
        /*按年查询*/
        laydate.render({
            elem: '#ipt_year',
            type: 'year',
            max: 0
        });
        /*按月查询*/
        laydate.render({
            elem: '#ipt_month',
            type: 'month',
            max: 0
        });
        /*按日查询*/
        laydate.render({
            elem: '#ipt_day',
            max: 0
        });
        /*按范围查询*/
        laydate.render({
            elem: '#ipt_datarange',
            type: 'month',
            range: true,
            max: 0
        });
        /*下拉框选择之后的联动*/
        form.on('select(sle_type_f)', function(data) {
            switch(parseInt(data.value))
            {
                case 1:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_transnum").siblings(".sel_value").val("");
                    $("#ipt_transnum").show();
                    $("#ipt_transnum").attr("lay-verify","required");
                    break;
                case 2:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_ordernum").siblings(".sel_value").val("");
                    $("#ipt_ordernum").show();
                    $("#ipt_ordernum").attr("lay-verify","required");
                    break;
                case 3:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_year").siblings(".sel_value").val("");
                    $("#ipt_year").show();
                    $("#ipt_year").attr("lay-verify","required");
                    break;
                case 4:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_month").siblings(".sel_value").val("");
                    $("#ipt_month").show();
                    $("#ipt_month").attr("lay-verify","required");
                    break;
                case 5:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_day").siblings(".sel_value").val("");
                    $("#ipt_day").show();
                    $("#ipt_day").attr("lay-verify","required");
                    break;
                case 6:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_datarange").siblings(".sel_value").val("");
                    $("#ipt_datarange").show();
                    $("#ipt_datarange").attr("lay-verify","required");
                    break;
                default:
                    break;
            }

        });
        //监听提交
        form.on('submit(search1)', function(data) {
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            //console.log(JSON.stringify(data.field));
            return false;
        });
        //执行渲染
        table.render({
            elem: '#tradelist', //指定原始表格元素选择器（推荐id选择器）
            height: 400, //容器高度
            cols: [
                [ //标题栏
                    { field: 'trade_no', title: '交易号', width: 200 },
                    { field: 'order_guid', title: '订单号', width: 200},
                    { field: 'user_guid', title: '用户ID', width: 180 },
                    { field: 'pay_type', title: '支付方式', width: 160, sort: true},
                    { field: 'price', title: '交易金额', width: 160},
                    { field: 'refund_price', title: '退款金额', width: 160},
                    { field: 'start_time', title: '交易时间', width: 200, sort: true},
                    { field: 'status', title: '状态', width: 100, sort: true},

                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [{"trade_no":"5154DEEDGRCE","user_guid":"张先生","order_guid":"SD415671235445155","pay_type":"paypay","price":"1500","refund_price":"1500","start_time":"2017/10/12 9:55:52","status":"正常"},{"trade_no":"SDERCXSDGRCE","user_guid":"王小姐","order_guid":"S1581671235445126","pay_type":"支付宝","price":"1800","refund_price":"无","start_time":"2018/01/12 19:20:52","status":"正常"},{"trade_no":"58962EEDGRCE","user_guid":"李先生","order_guid":"S4859671235445155","pay_type":"微信","price":"2600","refund_price":"无","start_time":"2012/3/3 9:55:52","status":"申请退款"},{"trade_no":"4615EEDGRCE","user_guid":"周先生","order_guid":"S488121671235445155","pay_type":"支付宝","price":"1200","refund_price":"无","start_time":"2018/03/22 15:55:52","status":"正常"},{"trade_no":"DF8591EEDGRCE","user_guid":"瑟先生","order_guid":"SD415671484198254","pay_type":"paypay","price":"1500","refund_price":"1500","start_time":"2017/10/12 9:55:52","status":"正常"}],
            page: true,
        });

    });
});