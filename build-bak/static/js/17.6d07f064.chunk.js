(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[17],{118:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var a=n(102),r=n.n(a);function i(e){return e.field.replace(/[A-Z]/g,(function(e){return"_"+e.toLowerCase()}))+" "+("descend"===e.order?"desc":"asc")}function s(e){return r.a.unix(parseInt(e)/1e3).format("YYYY-MM-DD HH:mm:ss")}},154:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var a=n(182),r=n(71);function i(e){var t={method:"post",url:"/manage/app/cruise/channel/v1/page",data:JSON.stringify(e)};return Object(r.a)(t,a.c)}function s(e){var t={method:"post",url:"/manage/sub/source/update",data:JSON.stringify(e)};return Object(r.a)(t,a.a)}function o(e){var t={method:"post",url:"/manage/sub/source/editor-pick",data:JSON.stringify(e)};return Object(r.a)(t,a.b)}},163:function(e,t,n){"use strict";function a(e){return{type:"GET_DOMAIN_PAGE",payload:e}}n.d(t,"a",(function(){return i}));var r=n(71);function i(e){var t={method:"post",url:"/manage/app/cernitor/domain/v1/page",data:JSON.stringify(e)};return Object(r.a)(t,a)}},241:function(e,t,n){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",a="second",r="minute",i="hour",s="day",o="week",u="month",c="quarter",l="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},y={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+g(a,2,"0")+":"+g(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(a,u),i=n-r<0,s=t.clone().add(a+(i?-1:1),u);return+(-(a+(n-r)/(i?r-s:s-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:l,w:o,d:s,D:d,h:i,m:r,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",S={};S[v]=p;var b=function(e){return e instanceof E},$=function(e,t,n){var a;if(!e)return v;if("string"==typeof e)S[e]&&(a=e),t&&(S[e]=t,a=e);else{var r=e.name;S[r]=e,a=r}return!n&&a&&(v=a),a||!n&&v},k=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new E(n)},O=y;O.l=$,O.i=b,O.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e)}var g=p.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(h);if(a){var r=a[2]-1||0,i=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return O},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return k(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<k(e)},g.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,c=!!O.u(t)||t,f=O.p(e),h=function(e,t){var a=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?a:a.endOf(s)},m=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case l:return c?h(1,0):h(31,11);case u:return c?h(1,g):h(0,g+1);case o:var S=this.$locale().weekStart||0,b=(p<S?p+7:p)-S;return h(c?y-b:y+(6-b),g);case s:case d:return m(v+"Hours",0);case i:return m(v+"Minutes",1);case r:return m(v+"Seconds",2);case a:return m(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var o,c=O.p(e),f="set"+(this.$u?"UTC":""),h=(o={},o[s]=f+"Date",o[d]=f+"Date",o[u]=f+"Month",o[l]=f+"FullYear",o[i]=f+"Hours",o[r]=f+"Minutes",o[a]=f+"Seconds",o[n]=f+"Milliseconds",o)[c],m=c===s?this.$D+(t-this.$W):t;if(c===u||c===l){var p=this.clone().set(d,1);p.$d[h](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[O.p(e)]()},g.add=function(n,c){var d,f=this;n=Number(n);var h=O.p(c),m=function(e){var t=k(f);return O.w(t.date(t.date()+Math.round(e*n)),f)};if(h===u)return this.set(u,this.$M+n);if(h===l)return this.set(l,this.$y+n);if(h===s)return m(1);if(h===o)return m(7);var p=(d={},d[r]=e,d[i]=t,d[a]=1e3,d)[h]||1,g=this.$d.getTime()+n*p;return O.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var a=e||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),i=this.$H,s=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=function(e,n,r,i){return e&&(e[n]||e(t,a))||r[n].substr(0,i)},d=function(e){return O.s(i%12||12,e,"0")},h=n.meridiem||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:O.s(o+1,2,"0"),MMM:l(n.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:O.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,s,!0),A:h(i,s,!1),m:String(s),mm:O.s(s,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return a.replace(m,(function(e,t){return t||p[e]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,d,f){var h,m=O.p(d),p=k(n),g=(p.utcOffset()-this.utcOffset())*e,y=this-p,v=O.m(this,p);return v=(h={},h[l]=v/12,h[u]=v,h[c]=v/3,h[o]=(y-g)/6048e5,h[s]=(y-g)/864e5,h[i]=y/t,h[r]=y/e,h[a]=y/1e3,h)[m]||y,f?v:O.a(v)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return S[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=$(e,t,!0);return a&&(n.$L=a),n},g.clone=function(){return O.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),w=E.prototype;return k.prototype=w,[["$ms",n],["$s",a],["$m",r],["$H",i],["$W",s],["$M",u],["$y",l],["$D",d]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,E,k),e.$i=!0),k},k.locale=$,k.isDayjs=b,k.unix=function(e){return k(1e3*e)},k.en=S[v],k.Ls=S,k.p={},k}()},675:function(e,t,n){"use strict";n.r(t);n(66);var a=n(67),r=(n(97),n(99)),i=(n(98),n(100)),s=(n(109),n(108)),o=(n(155),n(158)),u=(n(132),n(137)),c=n(187),l=(n(87),n(90)),d=(n(88),n(83)),f=(n(236),n(265)),h=(n(75),n(73)),m=(n(86),n(92)),p=n(12),g=n(13),y=n(15),v=n(14),S=(n(133),n(136)),b=n(0),$=n.n(b),k=n(76),O=n(162),E=(n(82),n(3)),w=n(154),M=n(163),_=n(118),D=n(134),j=n.n(D),C=n(119),I=n.n(C),x=n(241),N=n.n(x),T=n(193),z=S.a.TabPane,P=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,pageNum:1,pageSize:10,channelId:null,editorPick:null,name:null,defaultActiveKey:1,showModal:!1},e.enterLoading=function(){e.setState({loading:!0})},e.onPageChange=function(t,n){if(void 0!==n){e.setState({pageNum:t});var a={pageSize:e.state.pageSize,pageNum:t};Object(M.a)(a)}},e.onChange=function(t,n,a,r){if(0!==Object.keys(a).length||0!==Object.keys(n)){var i={pageSize:e.state.pageSize,pageNum:e.state.pageNum,orderByClause:a&&0===Object.keys(a).length?"":Object(_.b)(a),editorPick:0===Object.keys(n).length||void 0===n.editorPick?null:n.editorPick[0]};Object(M.a)(i)}},e.cancelSub=function(e,t){var n={id:t.id,subStatus:1===t.subStatus?0:1};Object(w.a)(n)},e.showArticles=function(t){e.props.history.push("/app/cruise/article?channelId="+encodeURIComponent(t.id))},e.editorPick=function(e){var t={id:e.id,editor_pick:1===e.editorPick?0:1};Object(w.b)(t)},e.getColumnSearchProps=function(t){return{filterDropdown:function(n){var a=n.setSelectedKeys,r=n.selectedKeys,i=n.confirm,s=n.clearFilters;return $.a.createElement("div",{style:{padding:8}},$.a.createElement(m.a,{ref:function(t){e.searchInput=t},placeholder:"Search ".concat(t),value:r[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(n){return e.handleSearch(r,i,t,n)},style:{width:188,marginBottom:8,display:"block"}}),$.a.createElement(h.a,{type:"primary",onClick:function(n){return e.handleSearch(r,i,t,n)},icon:"search",size:"small",style:{width:90,marginRight:8}},"Search"),$.a.createElement(h.a,{onClick:function(){return e.handleReset(s)},size:"small",style:{width:90}},"Reset"))},filterIcon:function(e){return $.a.createElement(O.a,{type:"search",style:{color:e?"#1890ff":void 0}})},onFilter:function(e,n){return n[t].toString().toLowerCase().includes(e.toLowerCase())},onFilterDropdownVisibleChange:function(t){t&&setTimeout((function(){return e.searchInput.select()}))},render:function(n,a){return e.state.searchedColumn===t?$.a.createElement("a",{href:a.subUrl,target:"_blank"},$.a.createElement(j.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[e.state.searchText],autoEscape:!0,textToHighlight:n.toString()}),1===a.editorPick&&"subName"===t?$.a.createElement(f.a,{color:"green-inverse"},"\u7f16\u8f91\u9009\u62e9"):$.a.createElement("span",null)):$.a.createElement("a",{href:a.subUrl,target:"_blank"},n,1===a.editorPick&&"subName"===t?$.a.createElement(f.a,{color:"green-inverse"},"\u7f16\u8f91\u9009\u62e9"):$.a.createElement("span",null))}}},e.handleSearch=function(t,n,a,r){n(),e.setState({searchText:t[0],searchedColumn:a}),"subName"===a&&e.setState({name:t[0]},(function(){e.handleFetch()})),"subUrl"===a&&e.setState({subUrl:t[0]},(function(){e.handleFetch()}))},e.handleFetch=function(){var t={pageSize:e.state.pageSize,pageNum:e.state.pageNum,name:e.state.name,subUrl:e.state.subUrl};Object(w.c)(t)},e.handleReset=function(t){t(),e.setState({searchText:""})},e.tabChange=function(t){if(e.setState({defaultActiveKey:t}),"1"===t){Object(w.c)({})}else if("2"===t){Object(w.c)({minimalReputation:10,excludeEditorPickChannel:1})}else if("3"===t){Object(w.c)({editorPick:1})}},e}return Object(g.a)(n,[{key:"changePageSize",value:function(e,t){this.setState({pageSize:e});var n={pageSize:e,pageNum:this.state.pageNum};Object(M.a)(n)}},{key:"componentDidMount",value:function(){var e=I.a.parse(this.props.location.search);if(e&&0===Object.keys(e).length||void 0===e){var t={pageSize:this.state.pageSize,pageNum:this.state.pageNum};Object(M.a)(t)}else{this.setState({channelId:e.channelId});var n={pageSize:this.state.pageSize,pageNum:this.state.pageNum,subSourceId:e.channelId};Object(M.a)(n)}}},{key:"componentWillUnmount",value:function(){d.a.destroy(),this.timer&&clearTimeout(this.timer)}},{key:"render",value:function(){var e=this,t=[{title:"ID",dataIndex:"id",key:"id"},{title:"\u57df\u540d\u5907\u6ce8",dataIndex:"domain_name",key:"domain_name"},{title:"\u9891\u7387\u914d\u7f6e",dataIndex:"cron",key:"cron"},{title:"\u57df\u540d",dataIndex:"domain_url",key:"domain_url"},{title:"\u63d0\u524d\u901a\u77e5\uff08\u5929\uff09",dataIndex:"days_before_trigger",key:"days_before_trigger"},{title:"\u89e6\u53d1\u68c0\u67e5\u65f6\u95f4",dataIndex:"notify_trigger_date",key:"notify_trigger_date"},{title:"\u4e0b\u4e00\u6b21\u68c0\u67e5\u65f6\u95f4",dataIndex:"next_trigger_time",key:"next_trigger_time"},{title:"\u8bc1\u4e66\u8fc7\u671f\u65f6\u95f4",dataIndex:"expire_date",key:"expire_date"},{title:"\u5269\u4f59\u5929\u6570",render:function(e){return $.a.createElement("span",null,N()(e.expire_date).diff(new Date,"day"))}},{title:"\u76d1\u63a7\u72b6\u6001",dataIndex:"monitor_status",key:"monitor_status",render:function(e){return"1"===e?$.a.createElement("span",null,"\u6b63\u5e38"):$.a.createElement("span",null,"\u505c\u6b62\u901a\u77e5")}},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return $.a.createElement("span",null,$.a.createElement(h.a,{type:"primary"},"\u8be6\u60c5"),$.a.createElement(l.a,{type:"vertical"}))}}],n=this.props.domain.domain.list,d=this.props.domain.domain,f=0,p=0,g=0;n&&0===Object.keys(n).length||void 0===n||(f=parseInt(d.pagination.total),p=d.pagination.pageSize,g=d.pagination.pageNum);var y={showSizeChanger:!0,showQuickJumper:!0,pageSize:p,pageSizeOptions:["10","20","30"],showTotal:function(){return"\u5171".concat(f,"\u6761")},current:g,total:f,onShowSizeChange:function(t,n){return e.changePageSize(n,t)},onChange:function(t,n){return e.onPageChange(t,n)}},v=function(){return $.a.createElement(S.a,{defaultActiveKey:e.state.defaultActiveKey,onChange:e.tabChange},$.a.createElement(z,{tab:"\u5168\u90e8",key:"1"},$.a.createElement(O,null)))},b=function(){var t=u.a.useForm(),n=Object(c.a)(t,1)[0];return $.a.createElement("div",null,$.a.createElement(h.a,{type:"primary",onClick:function(){e.setState({showModal:!0})}},"\u65b0\u589e"),$.a.createElement(o.a,{title:"\u65b0\u589e",visible:e.state.showModal,onOk:function(){e.setState({showModal:!1})},onCancel:function(){e.setState({showModal:!1})}},$.a.createElement(u.a,{form:n,layout:"vertical",onValuesChange:function(e){e.requiredMarkValue}},$.a.createElement(u.a.Item,{label:"\u57df\u540d\u5907\u6ce8",required:!0,tooltip:"This is a required field"},$.a.createElement(m.a,{placeholder:"input placeholder"})),$.a.createElement(u.a.Item,{label:"\u57df\u540d",tooltip:{title:"Tooltip with customize icon",icon:$.a.createElement(T.a,null)}},$.a.createElement(m.a,{placeholder:"input placeholder"})))))},O=function(){return $.a.createElement(r.a,null,$.a.createElement(i.a,null,$.a.createElement("div",{className:"base-style"},$.a.createElement("h3",{id:"basic"},"\u901a\u77e5\u7ba1\u7406"),$.a.createElement(l.a,null),$.a.createElement(b,null),$.a.createElement(s.a,{columns:t,dataSource:n,pagination:y,rowKey:"id"}))))};return $.a.createElement(a.a,{className:"animated fadeIn"},$.a.createElement("div",null,$.a.createElement(k.a,{arr:["\u5e94\u7528","Cernitor","\u901a\u77e5\u6e20\u9053"]})),$.a.createElement(v,null))}}]),n}(b.Component),Y=Object(E.g)(P);t.default=Y},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n(111);var a=n(110),r=n(153),i=n.n(r),s=n(25),o=n(24),u=!1,c=[],l=i.a.create({timeout:15e3});function d(){s.a.dispatch(Object(o.d)("")),window.location.href="/#/login"}function f(e,t){return l(e).then((function(e){if(e){var n=null==e.data.result||0===Object.keys(e.data.result).length?{}:e.data.result;s.a.dispatch(t(n))}})).catch((function(e){console.error(e)}))}l.defaults.headers.post["Content-Type"]="application/json",l.interceptors.request.use((function(e){var t=localStorage.getItem("accessToken");return t&&(e.headers["x-access-token"]=t),e}),(function(e){return Promise.reject(e)})),l.interceptors.response.use((function(e){if(200===e.status&&"200"===e.data.statusCode&&"200"===e.data.resultCode)return Promise.resolve(e);if("907"===e.data.statusCode)d();else if("904"===e.data.statusCode)d();else{if("00100100004016"!==e.data.resultCode){var t=e.data.msg;return a.b.error(t),Promise.reject(e)}!function(e){var t=e.config;if(u)return new Promise((function(e){c.push((function(n){t.baseURL="",t.headers["x-access-token"]=n,e(l(t))}))}));u=!0,function(){var e=localStorage.getItem("refreshToken");e||d();return function(e){return function(e){return l(e).then((function(e){if(e)return null==e.data.result||0===Object.keys(e.data.result).length?{}:e.data.result})).catch((function(e){console.error(e)}))}({method:"post",url:"/manage/auth/access_token/refresh",data:{deviceId:"xxxxxx",app:6,refreshToken:e}})}(e)}().then((function(e){var n=e.accessToken;if(n)return localStorage.setItem("token",n),localStorage.setItem("accessToken",n),l.defaults.headers["x-access-token"]=n,c.forEach((function(e){return e(n)})),c=[],l(t)})).catch((function(e){console.error("refreshtoken error =>",e),d()})).finally((function(){u=!1}))}(e)}}),(function(e){switch(e.response.status){case 401:case 403:case 404:case 500:break;default:console.log("\u5176\u4ed6\u9519\u8bef\u4fe1\u606f")}return Promise.reject(e)}))},76:function(e,t,n){"use strict";n(234);var a=n(243),r=n(0),i=n.n(r),s=n(23);var o=i.a.memo((function(e){return i.a.createElement(a.a,{style:{marginBottom:16}},i.a.createElement(a.a.Item,null,i.a.createElement(s.b,{to:"/index"},"\u9996\u9875")),e.arr&&e.arr.map((function(e){return"object"===typeof e?i.a.createElement(a.a.Item,{key:e.path},i.a.createElement(s.b,{to:e.path},e.title)):i.a.createElement(a.a.Item,{key:e},e)})))}),(function(e,t){return e.arr.join()===t.arr.join()}));t.a=o},82:function(e,t,n){}}]);
//# sourceMappingURL=17.6d07f064.chunk.js.map