var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.Chess=t.validateFen=t.SQUARES=t.DEFAULT_POSITION=t.KING=t.QUEEN=t.ROOK=t.BISHOP=t.KNIGHT=t.PAWN=t.BLACK=t.WHITE=void 0,t.WHITE="w",t.BLACK="b",t.PAWN="p",t.KNIGHT="n",t.BISHOP="b",t.ROOK="r",t.QUEEN="q",t.KING="k",t.DEFAULT_POSITION="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";const e=-1,i={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"};t.SQUARES=["a8","b8","c8","d8","e8","f8","g8","h8","a7","b7","c7","d7","e7","f7","g7","h7","a6","b6","c6","d6","e6","f6","g6","h6","a5","b5","c5","d5","e5","f5","g5","h5","a4","b4","c4","d4","e4","f4","g4","h4","a3","b3","c3","d3","e3","f3","g3","h3","a2","b2","c2","d2","e2","f2","g2","h2","a1","b1","c1","d1","e1","f1","g1","h1"];const s={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},r={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},o={b:[16,32,17,15],w:[-16,-32,-17,-15]},n={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},h=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],a=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],l={p:1,n:2,b:4,r:8,q:16,k:32},c=[t.KNIGHT,t.BISHOP,t.ROOK,t.QUEEN],_={w:[{square:r.a1,flag:s.QSIDE_CASTLE},{square:r.h1,flag:s.KSIDE_CASTLE}],b:[{square:r.a8,flag:s.QSIDE_CASTLE},{square:r.h8,flag:s.KSIDE_CASTLE}]},u={b:1,w:6},f=["1-0","0-1","1/2-1/2","*"];function p(t){return t>>4}function d(t){return 15&t}function m(t){return-1!=="0123456789".indexOf(t)}function g(t){const e=d(t),i=p(t);return"abcdefgh".substring(e,e+1)+"87654321".substring(i,i+1)}function b(e){return e===t.WHITE?t.BLACK:t.WHITE}function v(t){const e=[];e[0]="No errors.",e[1]="FEN string must contain six space-delimited fields.",e[2]="6th field (move number) must be a positive integer.",e[3]="5th field (half move counter) must be a non-negative integer.",e[4]="4th field (en-passant square) is invalid.",e[5]="3rd field (castling availability) is invalid.",e[6]="2nd field (side to move) is invalid.",e[7]="1st field (piece positions) does not contain 8 '/'-delimited rows.",e[8]="1st field (piece positions) is invalid [consecutive numbers].",e[9]="1st field (piece positions) is invalid [invalid piece].",e[10]="1st field (piece positions) is invalid [row too large].",e[11]="Illegal en-passant square";const i=t.split(/\s+/);if(6!==i.length)return{valid:!1,errorNumber:1,error:e[1]};const s=parseInt(i[5],10);if(isNaN(s)||s<=0)return{valid:!1,errorNumber:2,error:e[2]};const r=parseInt(i[4],10);if(isNaN(r)||r<0)return{valid:!1,errorNumber:3,error:e[3]};if(!/^(-|[abcdefgh][36])$/.test(i[3]))return{valid:!1,errorNumber:4,error:e[4]};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(i[2]))return{valid:!1,errorNumber:5,error:e[5]};if(!/^(w|b)$/.test(i[1]))return{valid:!1,errorNumber:6,error:e[6]};const o=i[0].split("/");if(8!==o.length)return{valid:!1,errorNumber:7,error:e[7]};for(let t=0;t<o.length;t++){let i=0,s=!1;for(let r=0;r<o[t].length;r++)if(m(o[t][r])){if(s)return{valid:!1,errorNumber:8,error:e[8]};i+=parseInt(o[t][r],10),s=!0}else{if(!/^[prnbqkPRNBQK]$/.test(o[t][r]))return{valid:!1,errorNumber:9,error:e[9]};i+=1,s=!1}if(8!==i)return{valid:!1,errorNumber:10,error:e[10]}}return"3"==i[3][1]&&"w"==i[1]||"6"==i[3][1]&&"b"==i[1]?{valid:!1,errorNumber:11,error:e[11]}:{valid:!0,errorNumber:0,error:e[0]}}function E(e,i,r,o,n,h,a=s.NORMAL){const l=p(o);if(n!==t.PAWN||7!==l&&0!==l)e.push({color:i,from:r,to:o,piece:n,captured:h,promotion:void 0,flags:a});else for(let t=0;t<c.length;t++){const l=c[t];e.push({color:i,from:r,to:o,piece:n,captured:h,promotion:l,flags:a|s.PROMOTION})}}function S(e){let i=e.charAt(0);if(i>="a"&&i<="h"){if(e.match(/[a-h]\d.*[a-h]\d/))return;return t.PAWN}return i=i.toLowerCase(),"o"===i?t.KING:i}function C(t){return t.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}t.validateFen=v;t.Chess=class{clear(i=!1){this._board=new Array(128),this._kings={w:e,b:e},this._turn=t.WHITE,this._castling={w:0,b:0},this._epSquare=e,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=i?this._header:{},this._updateSetup(this.fen())}load(i,o=!1){const n=i.split(/\s+/),h=n[0];let a=0;if(!v(i).valid)return!1;this.clear(o);for(let e=0;e<h.length;e++){const i=h.charAt(e);if("/"===i)a+=8;else if(m(i))a+=parseInt(i,10);else{const e=i<"a"?t.WHITE:t.BLACK;this.put({type:i.toLowerCase(),color:e},g(a)),a++}}return this._turn=n[1],n[2].indexOf("K")>-1&&(this._castling.w|=s.KSIDE_CASTLE),n[2].indexOf("Q")>-1&&(this._castling.w|=s.QSIDE_CASTLE),n[2].indexOf("k")>-1&&(this._castling.b|=s.KSIDE_CASTLE),n[2].indexOf("q")>-1&&(this._castling.b|=s.QSIDE_CASTLE),this._epSquare="-"===n[3]?e:r[n[3]],this._halfMoves=parseInt(n[4],10),this._moveNumber=parseInt(n[5],10),this._updateSetup(this.fen()),!0}fen(){let i=0,o="";for(let e=r.a8;e<=r.h1;e++){if(this._board[e]){i>0&&(o+=i,i=0);const{color:s,type:r}=this._board[e];o+=s===t.WHITE?r.toUpperCase():r.toLowerCase()}else i++;e+1&136&&(i>0&&(o+=i),e!==r.h1&&(o+="/"),i=0,e+=8)}let n="";this._castling[t.WHITE]&s.KSIDE_CASTLE&&(n+="K"),this._castling[t.WHITE]&s.QSIDE_CASTLE&&(n+="Q"),this._castling[t.BLACK]&s.KSIDE_CASTLE&&(n+="k"),this._castling[t.BLACK]&s.QSIDE_CASTLE&&(n+="q"),n=n||"-";const h=this._epSquare===e?"-":g(this._epSquare);return[o,this._turn,n,h,this._halfMoves,this._moveNumber].join(" ")}_updateSetup(e){this._history.length>0||(e!==t.DEFAULT_POSITION?(this._header.SetUp="1",this._header.FEN=e):(delete this._header.SetUp,delete this._header.FEN))}reset(){this.load(t.DEFAULT_POSITION)}get(t){return this._board[r[t]]||!1}put({type:i,color:s},o){if(-1==="pnbrqkPNBRQK".indexOf(i.toLowerCase()))return!1;if(!(o in r))return!1;const n=r[o];return(i!=t.KING||this._kings[s]==e||this._kings[s]==n)&&(this._board[n]={type:i,color:s},i===t.KING&&(this._kings[s]=n),this._updateSetup(this.fen()),!0)}remove(i){const s=this.get(i);return delete this._board[r[i]],s&&s.type===t.KING&&(this._kings[s.color]=e),this._updateSetup(this.fen()),s}_attacked(e,i){for(let s=r.a8;s<=r.h1;s++){if(136&s){s+=7;continue}if(void 0===this._board[s]||this._board[s].color!==e)continue;const r=this._board[s],o=s-i,n=o+119;if(h[n]&l[r.type]){if(r.type===t.PAWN){if(o>0){if(r.color===t.WHITE)return!0}else if(r.color===t.BLACK)return!0;continue}if("n"===r.type||"k"===r.type)return!0;const e=a[n];let h=s+e,l=!1;for(;h!==i;){if(null!=this._board[h]){l=!0;break}h+=e}if(!l)return!0}}return!1}_isKingAttacked(t){return this._attacked(b(t),this._kings[t])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&0===this._moves().length}isStalemate(){return!this.isCheck()&&0===this._moves().length}isInsufficientMaterial(){const e={b:0,n:0,r:0,q:0,k:0,p:0},i=[];let s=0,o=0;for(let n=r.a8;n<=r.h1;n++){if(o=(o+1)%2,136&n){n+=7;continue}const r=this._board[n];r&&(e[r.type]=r.type in e?e[r.type]+1:1,r.type===t.BISHOP&&i.push(o),s++)}if(2===s)return!0;if(3===s&&(1===e[t.BISHOP]||1===e[t.KNIGHT]))return!0;if(s===e[t.BISHOP]+2){let t=0;const e=i.length;for(let s=0;s<e;s++)t+=i[s];if(0===t||t===e)return!0}return!1}isThreefoldRepetition(){const t=[],e={};let i=!1;for(;;){const e=this._undoMove();if(!e)break;t.push(e)}for(;;){const s=this.fen().split(" ").slice(0,4).join(" ");e[s]=s in e?e[s]+1:1,e[s]>=3&&(i=!0);const r=t.pop();if(!r)break;this._makeMove(r)}return i}isDraw(){return this._halfMoves>=100||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isStalemate()||this.isDraw()}moves({verbose:t=!1,square:e}={}){const i=this._moves({square:e});return t?i.map((t=>this._makePretty(t))):i.map((t=>this._moveToSan(t,i)))}_moves({legal:e=!0,piece:i,square:h}={}){var a;const l=h?h.toLowerCase():void 0,c=null==i?void 0:i.toLowerCase(),_=[],f=this._turn,d=b(f);let m=r.a8,g=r.h1,v=!1;if(l){if(!(l in r))return[];m=g=r[l],v=!0}for(let e=m;e<=g;e++){if(136&e){e+=7;continue}if(!this._board[e]||this._board[e].color===d)continue;const{type:i}=this._board[e];let r;if(i===t.PAWN){if(c&&c!==i)continue;r=e+o[f][0],this._board[r]||(E(_,f,e,r,t.PAWN),r=e+o[f][1],u[f]!==p(e)||this._board[r]||E(_,f,e,r,t.PAWN,void 0,s.BIG_PAWN));for(let i=2;i<4;i++)r=e+o[f][i],136&r||((null===(a=this._board[r])||void 0===a?void 0:a.color)===d?E(_,f,e,r,t.PAWN,this._board[r].type,s.CAPTURE):r===this._epSquare&&E(_,f,e,r,t.PAWN,t.PAWN,s.EP_CAPTURE))}else{if(c&&c!==i)continue;for(let o=0,h=n[i].length;o<h;o++){const h=n[i][o];for(r=e;r+=h,!(136&r);){if(this._board[r]){if(this._board[r].color===f)break;E(_,f,e,r,i,this._board[r].type,s.CAPTURE);break}if(E(_,f,e,r,i),i===t.KNIGHT||i===t.KING)break}}}}if(!(void 0!==c&&c!==t.KING||v&&g!==this._kings[f])){if(this._castling[f]&s.KSIDE_CASTLE){const e=this._kings[f],i=e+2;this._board[e+1]||this._board[i]||this._attacked(d,this._kings[f])||this._attacked(d,e+1)||this._attacked(d,i)||E(_,f,this._kings[f],i,t.KING,void 0,s.KSIDE_CASTLE)}if(this._castling[f]&s.QSIDE_CASTLE){const e=this._kings[f],i=e-2;this._board[e-1]||this._board[e-2]||this._board[e-3]||this._attacked(d,this._kings[f])||this._attacked(d,e-1)||this._attacked(d,i)||E(_,f,this._kings[f],i,t.KING,void 0,s.QSIDE_CASTLE)}}if(!e)return _;const S=[];for(let t=0,e=_.length;t<e;t++)this._makeMove(_[t]),this._isKingAttacked(f)||S.push(_[t]),this._undoMove();return S}move(t,{sloppy:e=!1}={}){let i=null;if("string"==typeof t)i=this._moveFromSan(t,e);else if("object"==typeof t){const e=this._moves();for(let s=0,r=e.length;s<r;s++)if(t.from===g(e[s].from)&&t.to===g(e[s].to)&&(!("promotion"in e[s])||t.promotion===e[s].promotion)){i=e[s];break}}if(!i)return null;const s=this._makePretty(i);return this._makeMove(i),s}_push(t){this._history.push({move:t,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_makeMove(i){const r=this._turn,o=b(r);if(this._push(i),this._board[i.to]=this._board[i.from],delete this._board[i.from],i.flags&s.EP_CAPTURE&&(this._turn===t.BLACK?delete this._board[i.to-16]:delete this._board[i.to+16]),i.promotion&&(this._board[i.to]={type:i.promotion,color:r}),this._board[i.to].type===t.KING){if(this._kings[r]=i.to,i.flags&s.KSIDE_CASTLE){const t=i.to-1,e=i.to+1;this._board[t]=this._board[e],delete this._board[e]}else if(i.flags&s.QSIDE_CASTLE){const t=i.to+1,e=i.to-2;this._board[t]=this._board[e],delete this._board[e]}this._castling[r]=0}if(this._castling[r])for(let t=0,e=_[r].length;t<e;t++)if(i.from===_[r][t].square&&this._castling[r]&_[r][t].flag){this._castling[r]^=_[r][t].flag;break}if(this._castling[o])for(let t=0,e=_[o].length;t<e;t++)if(i.to===_[o][t].square&&this._castling[o]&_[o][t].flag){this._castling[o]^=_[o][t].flag;break}i.flags&s.BIG_PAWN?r===t.BLACK?this._epSquare=i.to-16:this._epSquare=i.to+16:this._epSquare=e,i.piece===t.PAWN||i.flags&(s.CAPTURE|s.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,r===t.BLACK&&this._moveNumber++,this._turn=o}undo(){const t=this._undoMove();return t?this._makePretty(t):null}_undoMove(){const e=this._history.pop();if(void 0===e)return null;const i=e.move;this._kings=e.kings,this._turn=e.turn,this._castling=e.castling,this._epSquare=e.epSquare,this._halfMoves=e.halfMoves,this._moveNumber=e.moveNumber;const r=this._turn,o=b(r);if(this._board[i.from]=this._board[i.to],this._board[i.from].type=i.piece,delete this._board[i.to],i.captured)if(i.flags&s.EP_CAPTURE){let e;e=r===t.BLACK?i.to-16:i.to+16,this._board[e]={type:t.PAWN,color:o}}else this._board[i.to]={type:i.captured,color:o};if(i.flags&(s.KSIDE_CASTLE|s.QSIDE_CASTLE)){let t,e;i.flags&s.KSIDE_CASTLE?(t=i.to+1,e=i.to-1):(t=i.to-2,e=i.to+1),this._board[t]=this._board[e],delete this._board[e]}return i}pgn({newline:t="\n",maxWidth:e=0}={}){const i=[];let s=!1;for(const e in this._header)i.push("["+e+' "'+this._header[e]+'"]'+t),s=!0;s&&this._history.length&&i.push(t);const r=t=>{const e=this._comments[this.fen()];if(void 0!==e){t=`${t}${t.length>0?" ":""}{${e}}`}return t},o=[];for(;this._history.length>0;)o.push(this._undoMove());const n=[];let h="";for(0===o.length&&n.push(r(""));o.length>0;){h=r(h);const t=o.pop();if(!t)break;if(this._history.length||"b"!==t.color)"w"===t.color&&(h.length&&n.push(h),h=this._moveNumber+".");else{const t=`${this._moveNumber}. ...`;h=h?`${h} ${t}`:t}h=h+" "+this._moveToSan(t,this._moves({legal:!0})),this._makeMove(t)}if(h.length&&n.push(r(h)),void 0!==this._header.Result&&n.push(this._header.Result),0===e)return i.join("")+n.join(" ");const a=function(){return i.length>0&&" "===i[i.length-1]&&(i.pop(),!0)},l=function(s,r){for(const o of r.split(" "))if(o){if(s+o.length>e){for(;a();)s--;i.push(t),s=0}i.push(o),s+=o.length,i.push(" "),s++}return a()&&s--,s};let c=0;for(let s=0;s<n.length;s++)c+n[s].length>e&&n[s].includes("{")?c=l(c,n[s]):(c+n[s].length>e&&0!==s?(" "===i[i.length-1]&&i.pop(),i.push(t),c=0):0!==s&&(i.push(" "),c++),i.push(n[s]),c+=n[s].length);return i.join("")}header(...t){for(let e=0;e<t.length;e+=2)"string"==typeof t[e]&&"string"==typeof t[e+1]&&(this._header[t[e]]=t[e+1]);return this._header}loadPgn(t,{sloppy:e=!1,newlineChar:i="\r?\n"}={}){function s(t){return t.replace(/\\/g,"\\")}t=t.trim();const r=new RegExp("^(\\[((?:"+s(i)+")|.)*\\])(?:\\s*"+s(i)+"){2}").exec(t),o=r&&r.length>=2?r[1]:"";this.reset();const n=function(t){const e={},r=t.split(new RegExp(s(i)));let o="",n="";for(let t=0;t<r.length;t++){const i=/^\s*\[([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;o=r[t].replace(i,"$1"),n=r[t].replace(i,"$2"),o.trim().length>0&&(e[o]=n)}return e}(o);let h="";for(const t in n)"fen"===t.toLowerCase()&&(h=n[t]),this.header(t,n[t]);if(e){if(h&&!this.load(h,!0))return!1}else if(!("1"!==n.SetUp||"FEN"in n&&this.load(n.FEN,!0)))return!1;const a=function(t){return`{${function(t){return Array.from(t).map((function(t){return t.charCodeAt(0)<128?t.charCodeAt(0).toString(16):encodeURIComponent(t).replace(/%/g,"").toLowerCase()})).join("")}((t=t.replace(new RegExp(s(i),"g")," ")).slice(1,t.length-1))}}`},l=function(t){if(t.startsWith("{")&&t.endsWith("}"))return function(t){return 0==t.length?"":decodeURIComponent("%"+(t.match(/.{1,2}/g)||[]).join("%"))}(t.slice(1,t.length-1))};let c=t.replace(o,"").replace(new RegExp(`({[^}]*})+?|;([^${s(i)}]*)`,"g"),(function(t,e,i){return void 0!==e?a(e):" "+a(`{${i.slice(1)}}`)})).replace(new RegExp(s(i),"g")," ");const _=/(\([^()]+\))+?/g;for(;_.test(c);)c=c.replace(_,"");c=c.replace(/\d+\.(\.\.)?/g,""),c=c.replace(/\.\.\./g,""),c=c.replace(/\$\d+/g,"");let u=c.trim().split(new RegExp(/\s+/));u=u.join(",").replace(/,,+/g,",").split(",");let p="";for(let t=0;t<u.length;t++){const i=l(u[t]);if(void 0!==i){this._comments[this.fen()]=i;continue}const s=this._moveFromSan(u[t],e);if(null==s){if(!(f.indexOf(u[t])>-1))return!1;p=u[t]}else p="",this._makeMove(s)}return p&&Object.keys(this._header).length&&!this._header.Result&&this.header("Result",p),!0}_moveToSan(e,i){let r="";if(e.flags&s.KSIDE_CASTLE)r="O-O";else if(e.flags&s.QSIDE_CASTLE)r="O-O-O";else{if(e.piece!==t.PAWN){const t=function(t,e){const i=t.from,s=t.to,r=t.piece;let o=0,n=0,h=0;for(let t=0,a=e.length;t<a;t++){const a=e[t].from,l=e[t].to;r===e[t].piece&&i!==a&&s===l&&(o++,p(i)===p(a)&&n++,d(i)===d(a)&&h++)}return o>0?n>0&&h>0?g(i):h>0?g(i).charAt(1):g(i).charAt(0):""}(e,i);r+=e.piece.toUpperCase()+t}e.flags&(s.CAPTURE|s.EP_CAPTURE)&&(e.piece===t.PAWN&&(r+=g(e.from)[0]),r+="x"),r+=g(e.to),e.promotion&&(r+="="+e.promotion.toUpperCase())}return this._makeMove(e),this.isCheck()&&(this.isCheckmate()?r+="#":r+="+"),this._undoMove(),r}_moveFromSan(t,e=!1){const i=C(t);let s,o,n,h,a,l=S(i),c=this._moves({legal:!0,piece:l});for(let t=0,e=c.length;t<e;t++)if(i===C(this._moveToSan(c[t],c)))return c[t];if(!e)return null;let _=!1;o=i.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),o?(s=o[1],n=o[2],h=o[3],a=o[4],1==n.length&&(_=!0)):(o=i.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),o&&(s=o[1],n=o[2],h=o[3],a=o[4],1==n.length&&(_=!0))),l=S(i),c=this._moves({legal:!0,piece:s||l});for(let t=0,e=c.length;t<e;t++)if(n&&h){if(!(s&&s.toLowerCase()!=c[t].piece||r[n]!=c[t].from||r[h]!=c[t].to||a&&a.toLowerCase()!=c[t].promotion))return c[t];if(_){const e=g(c[t].from);if(!(s&&s.toLowerCase()!=c[t].piece||r[h]!=c[t].to||n!=e[0]&&n!=e[1]||a&&a.toLowerCase()!=c[t].promotion))return c[t]}}return null}ascii(){let e="   +------------------------+\n";for(let i=r.a8;i<=r.h1;i++){if(0===d(i)&&(e+=" "+"87654321"[p(i)]+" |"),this._board[i]){const s=this._board[i].type;e+=" "+(this._board[i].color===t.WHITE?s.toUpperCase():s.toLowerCase())+" "}else e+=" . ";i+1&136&&(e+="|\n",i+=8)}return e+="   +------------------------+\n",e+="     a  b  c  d  e  f  g  h",e}perft(t){const e=this._moves({legal:!1});let i=0;const s=this._turn;for(let r=0,o=e.length;r<o;r++)this._makeMove(e[r]),this._isKingAttacked(s)||(t-1>0?i+=this.perft(t-1):i++),this._undoMove();return i}_makePretty(t){const{color:e,piece:r,from:o,to:n,flags:h,captured:a,promotion:l}=t;let c="";for(const t in s)s[t]&h&&(c+=i[t]);const _={color:e,piece:r,from:g(o),to:g(n),san:this._moveToSan(t,this._moves({legal:!0})),flags:c};return a&&(_.captured=a),l&&(_.promotion=l),_}turn(){return this._turn}board(){const t=[];let e=[];for(let i=r.a8;i<=r.h1;i++)null==this._board[i]?e.push(null):e.push({square:g(i),type:this._board[i].type,color:this._board[i].color}),i+1&136&&(t.push(e),e=[],i+=8);return t}squareColor(t){if(t in r){const e=r[t];return(p(e)+d(e))%2==0?"light":"dark"}return null}history({verbose:t=!1}={}){const e=[],i=[];for(;this._history.length>0;)e.push(this._undoMove());for(;;){const s=e.pop();if(!s)break;t?i.push(this._makePretty(s)):i.push(this._moveToSan(s,this._moves())),this._makeMove(s)}return i}_pruneComments(){const t=[],e={},i=t=>{t in this._comments&&(e[t]=this._comments[t])};for(;this._history.length>0;)t.push(this._undoMove());for(i(this.fen());;){const e=t.pop();if(!e)break;this._makeMove(e),i(this.fen())}this._comments=e}getComment(){return this._comments[this.fen()]}setComment(t){this._comments[this.fen()]=t.replace("{","[").replace("}","]")}deleteComment(){const t=this._comments[this.fen()];return delete this._comments[this.fen()],t}getComments(){return this._pruneComments(),Object.keys(this._comments).map((t=>({fen:t,comment:this._comments[t]})))}deleteComments(){return this._pruneComments(),Object.keys(this._comments).map((t=>{const e=this._comments[t];return delete this._comments[t],{fen:t,comment:e}}))}constructor(i=t.DEFAULT_POSITION){this._board=new Array(128),this._turn=t.WHITE,this._header={},this._kings={w:e,b:e},this._epSquare=-1,this._halfMoves=0,this._moveNumber=0,this._history=[],this._comments={},this._castling={w:0,b:0},this.load(i)}},console.log("Hello world!");var A=null,k=new(0,t.Chess);A=Chessboard("board1",{pieceTheme:"img/chesspieces/wikipedia/{piece}.png",position:"start"}),window.setTimeout((function t(){var e=k.moves();if(!k.isGameOver()){var i=Math.floor(Math.random()*e.length);k.move(e[i]),A.position(k.fen()),window.setTimeout(t,500)}}),500);
//# sourceMappingURL=index.36e270e8.js.map
