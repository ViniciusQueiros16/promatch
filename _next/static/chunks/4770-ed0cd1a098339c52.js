"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4770],{36400:function(e,a,o){var t=o(88169),l=o(85893);a.Z=(0,t.Z)((0,l.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star")},31154:function(e,a,o){var t=o(88169),l=o(85893);a.Z=(0,t.Z)((0,l.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorderOutlined")},87918:function(e,a,o){o.d(a,{Z:function(){return z}});var t=o(63366),l=o(87462),r=o(67294),n=o(86010),c=o(94780),i=o(41796),s=o(88169),d=o(85893),p=(0,s.Z)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),v=o(51705),m=o(98216),u=o(16747),b=o(71657),g=o(90948),$=o(1588),h=o(34867);function C(e){return(0,h.Z)("MuiChip",e)}let y=(0,$.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),f=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],Z=e=>{let{classes:a,disabled:o,size:t,color:l,iconColor:r,onDelete:n,clickable:i,variant:s}=e,d={root:["root",s,o&&"disabled",`size${(0,m.Z)(t)}`,`color${(0,m.Z)(l)}`,i&&"clickable",i&&`clickableColor${(0,m.Z)(l)}`,n&&"deletable",n&&`deletableColor${(0,m.Z)(l)}`,`${s}${(0,m.Z)(l)}`],label:["label",`label${(0,m.Z)(t)}`],avatar:["avatar",`avatar${(0,m.Z)(t)}`,`avatarColor${(0,m.Z)(l)}`],icon:["icon",`icon${(0,m.Z)(t)}`,`iconColor${(0,m.Z)(r)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,m.Z)(t)}`,`deleteIconColor${(0,m.Z)(l)}`,`deleteIcon${(0,m.Z)(s)}Color${(0,m.Z)(l)}`]};return(0,c.Z)(d,C,a)},k=(0,g.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:o}=e,{color:t,iconColor:l,clickable:r,onDelete:n,size:c,variant:i}=o;return[{[`& .${y.avatar}`]:a.avatar},{[`& .${y.avatar}`]:a[`avatar${(0,m.Z)(c)}`]},{[`& .${y.avatar}`]:a[`avatarColor${(0,m.Z)(t)}`]},{[`& .${y.icon}`]:a.icon},{[`& .${y.icon}`]:a[`icon${(0,m.Z)(c)}`]},{[`& .${y.icon}`]:a[`iconColor${(0,m.Z)(l)}`]},{[`& .${y.deleteIcon}`]:a.deleteIcon},{[`& .${y.deleteIcon}`]:a[`deleteIcon${(0,m.Z)(c)}`]},{[`& .${y.deleteIcon}`]:a[`deleteIconColor${(0,m.Z)(t)}`]},{[`& .${y.deleteIcon}`]:a[`deleteIcon${(0,m.Z)(i)}Color${(0,m.Z)(t)}`]},a.root,a[`size${(0,m.Z)(c)}`],a[`color${(0,m.Z)(t)}`],r&&a.clickable,r&&"default"!==t&&a[`clickableColor${(0,m.Z)(t)})`],n&&a.deletable,n&&"default"!==t&&a[`deletableColor${(0,m.Z)(t)}`],a[i],a[`${i}${(0,m.Z)(t)}`]]}})(({theme:e,ownerState:a})=>{let o="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return(0,l.Z)({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${y.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${y.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:o,fontSize:e.typography.pxToRem(12)},[`& .${y.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${y.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${y.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${y.icon}`]:(0,l.Z)({marginLeft:5,marginRight:-6},"small"===a.size&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&(0,l.Z)({color:e.vars?e.vars.palette.Chip.defaultIconColor:o},"default"!==a.color&&{color:"inherit"})),[`& .${y.deleteIcon}`]:(0,l.Z)({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:(0,i.Fq)(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,i.Fq)(e.palette.text.primary,.4)}},"small"===a.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==a.color&&{color:e.vars?`rgba(${e.vars.palette[a.color].contrastTextChannel} / 0.7)`:(0,i.Fq)(e.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].contrastText}})},"small"===a.size&&{height:24},"default"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].main,color:(e.vars||e).palette[a.color].contrastText},a.onDelete&&{[`&.${y.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,i.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},a.onDelete&&"default"!==a.color&&{[`&.${y.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}})},({theme:e,ownerState:a})=>(0,l.Z)({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,i.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${y.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,i.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},a.clickable&&"default"!==a.color&&{[`&:hover, &.${y.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}}),({theme:e,ownerState:a})=>(0,l.Z)({},"outlined"===a.variant&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${y.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${y.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${y.avatar}`]:{marginLeft:4},[`& .${y.avatarSmall}`]:{marginLeft:2},[`& .${y.icon}`]:{marginLeft:4},[`& .${y.iconSmall}`]:{marginLeft:2},[`& .${y.deleteIcon}`]:{marginRight:5},[`& .${y.deleteIconSmall}`]:{marginRight:3}},"outlined"===a.variant&&"default"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:(0,i.Fq)(e.palette[a.color].main,.7)}`,[`&.${y.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,i.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity)},[`&.${y.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,i.Fq)(e.palette[a.color].main,e.palette.action.focusOpacity)},[`& .${y.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:(0,i.Fq)(e.palette[a.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].main}}})),S=(0,g.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{let{ownerState:o}=e,{size:t}=o;return[a.label,a[`label${(0,m.Z)(t)}`]]}})(({ownerState:e})=>(0,l.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===e.size&&{paddingLeft:8,paddingRight:8}));function x(e){return"Backspace"===e.key||"Delete"===e.key}let I=r.forwardRef(function(e,a){let o=(0,b.Z)({props:e,name:"MuiChip"}),{avatar:c,className:i,clickable:s,color:m="default",component:g,deleteIcon:$,disabled:h=!1,icon:C,label:y,onClick:I,onDelete:z,onKeyDown:L,onKeyUp:O,size:R="medium",variant:w="filled",tabIndex:F,skipFocusWhenDisabled:P=!1}=o,M=(0,t.Z)(o,f),N=r.useRef(null),T=(0,v.Z)(N,a),V=e=>{e.stopPropagation(),z&&z(e)},E=e=>{e.currentTarget===e.target&&x(e)&&e.preventDefault(),L&&L(e)},q=e=>{e.currentTarget===e.target&&(z&&x(e)?z(e):"Escape"===e.key&&N.current&&N.current.blur()),O&&O(e)},D=!1!==s&&!!I||s,j=D||z?u.Z:g||"div",W=(0,l.Z)({},o,{component:j,disabled:h,size:R,color:m,iconColor:r.isValidElement(C)&&C.props.color||m,onDelete:!!z,clickable:D,variant:w}),K=Z(W),_=j===u.Z?(0,l.Z)({component:g||"div",focusVisibleClassName:K.focusVisible},z&&{disableRipple:!0}):{},B=null;z&&(B=$&&r.isValidElement($)?r.cloneElement($,{className:(0,n.Z)($.props.className,K.deleteIcon),onClick:V}):(0,d.jsx)(p,{className:(0,n.Z)(K.deleteIcon),onClick:V}));let A=null;c&&r.isValidElement(c)&&(A=r.cloneElement(c,{className:(0,n.Z)(K.avatar,c.props.className)}));let H=null;return C&&r.isValidElement(C)&&(H=r.cloneElement(C,{className:(0,n.Z)(K.icon,C.props.className)})),(0,d.jsxs)(k,(0,l.Z)({as:j,className:(0,n.Z)(K.root,i),disabled:!!D&&!!h||void 0,onClick:I,onKeyDown:E,onKeyUp:q,ref:T,tabIndex:P&&h?-1:F,ownerState:W},_,M,{children:[A||H,(0,d.jsx)(S,{className:(0,n.Z)(K.label),ownerState:W,children:y}),B]}))});var z=I}}]);