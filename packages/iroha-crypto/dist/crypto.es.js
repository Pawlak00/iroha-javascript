Symbol.toStringTag;let e=new("undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});e.decode();let n=null;function r(){return null!==n&&void 0===n.buffer||(n=new Uint8Array(void 0)),n}let o=0;function t(e,n){const t=n(1*e.length);return r().set(e,t/1),o=e.length,t}let i=null;function u(){return null!==i&&void 0===i.buffer||(i=new Int32Array(void 0)),i}function d(e,n){return r().subarray(e/1,e/1+n)}function l(e){try{const l=(void 0)(-16);(void 0)(l,t(e,void 0),o);var n=u()[l/4+0],r=u()[l/4+1],i=d(n,r).slice();return(void 0)(n,1*r),i}finally{(void 0)(16)}}function v(e,n){try{const v=(void 0)(-16);(void 0)(v,t(e,void 0),o,t(n,void 0),o);var r=u()[v/4+0],i=u()[v/4+1],l=d(r,i).slice();return(void 0)(r,1*i),l}finally{(void 0)(16)}}function c(n,o){throw new Error((t=n,i=o,e.decode(r().subarray(t,t+i))));var t,i}export{c as __wbindgen_throw,l as create_blake2b_32_hash,v as sign_with_ed25519_sha512};
