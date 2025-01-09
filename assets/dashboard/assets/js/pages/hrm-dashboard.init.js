"use strict";var options={series:[{name:"Financial team",data:[30,28,56,44,35,30,40]},{name:"Project Manager",data:[45,39,40,34,47,40,42]},{name:"Marketing  team",data:[49,56,50,24,45,28,38]},{name:"Product Design team",data:[39,30,38,42,25,42,55]}],chart:{type:"bar",height:255,stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},grid:{borderColor:"#f1f1f1",strokeDashArray:3,show:!1},plotOptions:{bar:{columnWidth:"60%",borderRadius:2,isFunnel3d:!0}},responsive:[{breakpoint:480,options:{chart:{width:"100%"},legend:{position:"bottom"}}}],colors:["#0055fb","#108dff","#87DAE9","#D0F2FB"],dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},yaxis:{show:!1},fill:{opacity:1},legend:{show:!0,position:"top",fontWeight:500,horizontalAlign:"left",itemMargin:{horizontal:10,vertical:0}}},chart=new ApexCharts(document.querySelector("#job-report"),options);chart.render();options={series:[20,25,55,35],chart:{type:"donut",height:237},labels:["Active Job","Unactive","Closed","On Hold"],colors:["#108dff","rgba(16, 141, 255, 0.7)","rgba(16, 141, 255, 0.5)","rgba(16, 141, 255, 0.2)"],plotOptions:{pie:{donut:{size:"70%",labels:{show:!0,total:{show:!0,label:"Total Jobs",formatter:function(){return"134"}}}}}},stroke:{width:0},dataLabels:{enabled:!1},legend:{show:!1}};(chart=new ApexCharts(document.querySelector("#your-preformance"),options)).render();options={series:[{name:"Income",data:[6800,6800,8800,8800,10200,10200,8600,8600,7200,8e3,11e3,11e3]},{name:"Expense",data:[2500,2500,4500,3200,3200,2e3,4500,4500,2500,2500,5e3,5e3]}],chart:{type:"line",height:292,parentHeightOffset:0,toolbar:{show:!1}},stroke:{curve:"smooth",width:2},colors:["#108dff","#E77636"],fill:{type:"gradient"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},yaxis:{min:0,labels:{formatter:function(e){return"$".concat((e/1e3).toFixed(0),"k")}}},tooltip:{shared:!0,intersect:!1,theme:"light",marker:{show:!0},y:{formatter:function(e){return"$".concat(e.toLocaleString())}}},grid:{borderColor:"#f0f4f7",xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}}};(chart=new ApexCharts(document.querySelector("#staff-work"),options)).render();