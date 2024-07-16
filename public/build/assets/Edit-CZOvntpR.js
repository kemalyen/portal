import{W as u,j as e,Y as x,a as h}from"./app-CKD5xRtC.js";import{I as r}from"./InputError-D0v1nfZ7.js";import{I as i}from"./InputLabel-DMmY010d.js";import{S as g}from"./SelectInput-CdQlQ0_l.js";import"./TextAreaInput-oJbWdoM-.js";import{T as n}from"./TextInput-VzsLHgic.js";import{A as j}from"./AuthenticatedLayout-DjO33fE6.js";import"./ApplicationLogo-CdIKpuGM.js";import"./transition-DzxZ-URP.js";function I({auth:o,customer:t}){const{data:s,setData:l,post:c,errors:m,reset:p}=u({name:t.data.attributes.name||"",email:t.data.attributes.email||"",status:t.data.attributes.status||"",balance:t.data.attributes.balance||"",_method:"PUT"}),d=a=>{a.preventDefault(),c(route("customers.update",t.data.id))};return e.jsxs(j,{user:o.user,roles:o.roles,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:['Edit customer "',t.data.attributes.name,'"']})}),children:[e.jsx(x,{title:"Customers"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("form",{onSubmit:d,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"customer_name",value:"Customer Name"}),e.jsx(n,{id:"customer_name",type:"text",name:"name",value:s.name,className:"mt-1 block w-full",isFocused:!0,onChange:a=>l("name",a.target.value)}),e.jsx(r,{message:m.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"customer_email",value:"User Email"}),e.jsx(n,{id:"customer_email",type:"text",name:"email",value:s.email,className:"mt-1 block w-full",onChange:a=>l("email",a.target.value)}),e.jsx(r,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"status",value:"Status"}),e.jsxs(g,{name:"status",id:"customer_status",value:s.status==="Active"?1:0,className:"mt-1 block w-full",onChange:a=>l("status",a.target.value),children:[e.jsx("option",{value:"",children:"Select Status"}),e.jsx("option",{value:"1",children:"Active"}),e.jsx("option",{value:"0",children:"Inactive"})]}),e.jsx(r,{message:m.status,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"customer_balance",value:"balance"}),e.jsx(n,{id:"customer_balance",type:"text",name:"balance",value:s.balance,className:"mt-1 block w-full",onChange:a=>l("balance",a.target.value)}),e.jsx(r,{message:m.balance,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 text-right",children:[e.jsx(h,{href:route("customers.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Submit"})]})]})})})})]})}export{I as default};
