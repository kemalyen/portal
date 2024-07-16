import{W as g,j as e,Y as v,a as _}from"./app-CKD5xRtC.js";import{I as l}from"./InputError-D0v1nfZ7.js";import{I as m}from"./InputLabel-DMmY010d.js";import{S as n}from"./SelectInput-CdQlQ0_l.js";import"./TextAreaInput-oJbWdoM-.js";import{T as i}from"./TextInput-VzsLHgic.js";import{A as w}from"./AuthenticatedLayout-DjO33fE6.js";import"./ApplicationLogo-CdIKpuGM.js";import"./transition-DzxZ-URP.js";function U({auth:d,user:o,customers:c,customer_id:u,roles:x,current_role_id:p}){const{data:a,setData:t,post:h,errors:r,reset:f}=g({name:o.data.attributes.name||"",email:o.data.attributes.email||"",customer_id:u||"",role_id:p||"",password:"",password_confirmation:"",_method:"PUT"}),j=s=>{s.preventDefault(),h(route("users.update",o.data.id))};return e.jsxs(w,{user:d.user,roles:d.roles,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:['Edit user "',o.data.attributes.name,'"']})}),children:[e.jsx(v,{title:"Users"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("form",{onSubmit:j,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"user_name",value:"User Name"}),e.jsx(i,{id:"user_name",type:"text",name:"name",value:a.name,className:"mt-1 block w-full",isFocused:!0,onChange:s=>t("name",s.target.value)}),e.jsx(l,{message:r.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"user_email",value:"User Email"}),e.jsx(i,{id:"user_email",type:"text",name:"email",value:a.email,className:"mt-1 block w-full",onChange:s=>t("email",s.target.value)}),e.jsx(l,{message:r.email,className:"mt-2"})]}),d.roles.includes("Admin")?e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"customer_id",value:"Customers"}),e.jsxs(n,{name:"customer_id",id:"user_customer_id",className:"mt-1 block w-full",value:a.customer_id,onChange:s=>t("customer_id",s.target.value),children:[e.jsx("option",{value:"",children:"Select Customer"}),c.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),e.jsx(l,{message:r.customer_id,className:"mt-2"})]}):e.jsx(i,{id:"customer_id",type:"hidden",name:"customer_id",value:a.customer_id,className:"mt-1 block w-full",onChange:s=>t("customer_id",s.target.value)}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"role_id",value:"Role"}),e.jsxs(n,{name:"role_id",id:"user_role_id",value:a.role_id,className:"mt-1 block w-full",onChange:s=>t("role_id",s.target.value),children:[e.jsx("option",{value:"",children:"Select Role"}),x.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),e.jsx(l,{message:r.role_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"user_password",value:"Password"}),e.jsx(i,{id:"user_password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",onChange:s=>t("password",s.target.value)}),e.jsx(l,{message:r.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"user_password_confirmation",value:"Confirm Password"}),e.jsx(i,{id:"user_password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",onChange:s=>t("password_confirmation",s.target.value)}),e.jsx(l,{message:r.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 text-right",children:[e.jsx(_,{href:route("users.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Submit"})]})]})})})})]})}export{U as default};
