////////////////////////////////////////////////////////////////////////////////
// xyz-gallery - Josef Kubin (c) 2008 <jkubin redhat com>                     //
////////////////////////////////////////////////////////////////////////////////
function NodeHandle(RootNode, t){
with(RootNode.Info)
if(hasChildNodes())
if(firstChild.Settings)
replaceChild(RootNode.Container, firstChild);
else
firstChild.childNodes[1].firstChild.Type - t.Type || removeChild(firstChild);
else
appendChild(RootNode.Container);
RootNode.Container.Data.replaceChild(t, RootNode.Container.Data.firstChild);
}
function Description(){
var RootNode = this.RootNode;
RootNode.Container.Data.Desc.firstChild.nodeValue = 
RootNode.Title ? RootNode.Title : '- no description -';
NodeHandle(RootNode, RootNode.Container.Data.Desc);
}
function Exif(){
var RootNode = this.RootNode, Div;
if(!RootNode.Container.Data.Exif){
RootNode.Container.Data.Exif = c('div');
with(RootNode.Container.Data){
Exif.Header = Exif.appendChild(c('h3'));
Exif.Header.appendChild(t('Image data' + 
(RootNode.ExifData.length > 1 ? ', EXIF' : ' (EXIF is not available)')));
Exif.ExifData = [];
(Exif.ExifData[0] = Exif.appendChild(Div = c('div'))).appendChild(t(RootNode.Image.src));
Div.className = 'text';
Div.onmousedown = function(e){
e ? e.stopPropagation() : (event.cancelBubble = true);
};
(Exif.ExifData[1] = Exif.appendChild(c('div'))).appendChild(t('Dimensions..........: ' + 
RootNode.Image.Width + ' x ' + RootNode.Image.Height + ' [px]'));
}
for(var i = 0; i < RootNode.ExifData.length;i++)
(RootNode.Container.Data.Exif.ExifData[i+2] = 
RootNode.Container.Data.Exif.appendChild(c('div'))).appendChild(
t(Root.ExifKey[i] + (RootNode.ExifData[i] ? RootNode.ExifData[i] : 'N/A')));
RootNode.Container.Data.Exif.Type = 3;
}
NodeHandle(RootNode, RootNode.Container.Data.Exif);
}
function Help(){
var RootNode = this.RootNode;
if(!RootNode.Container.Data.Help){
(RootNode.Container.Data.Help = c('div')).innerHTML = '<h3>PiXel - short\
cuts for viewer </h3><div style="margin:5px 0 0">Description ....: <span class="\
key">i</span> (<span class="key">i</span>nfo)</div><span class="key sig">F</span\
>orward ........: <span class="key">f</span><br /><span class="key sig">B</span>\
ackward .......: <span class="key">b</span><br />Zoom-in ........: <span class="\
key sig">+</span> [<span class="key">plus</span>]<br />Zoom-out .......: <span c\
lass="key sig">-</span> [<span class="key">minus</span>]<br /><span class="key s\
ig">M</span>aximum ........: <span class="key">m</span><br />Floating <span clas\
s="key sig">z</span>oom ..: <span class="key">z</span><br /><span class="key sig\
">R</span>eset ..........: <span class="key">r</span><br /><span class="key sig"\
>E</span>XIF data ......: <span class="key">e</span><br />Statistics <span class\
="key">d</span>ata : <span class="key">d</span><br /><span class="key sig">S</sp\
an>ettings .......: <span class="key">s</span><br /><span class="key sig">H</spa\
n>elp ...........: <span class="key">h</span><br />Hide <span class="key">p</spa\
n>anel .....: <span class="key">p</span><br />Close ..........: <span class="key\
">Esc</span> (double click on img)<ul class="ht"><li>Reloading of the webpage cl\
oses all opened images.</li><li>Do not hide control panel in the „Viewer setting\
s“ unless you know shortcuts - browser remembers your settings!</li><li>Shortcut\
s takes control of top image.</li><li>Using of shortcuts is faster <img src=".fi\
les/smile.gif" />.</li></ul><h4>Josef Kubin &copy; 2008 jkubin@redhat.com</h4>';
RootNode.Container.Data.Help.Type = 2;
}
NodeHandle(RootNode, RootNode.Container.Data.Help);
}
function Stats(){
var RootNode = this.RootNode;
if(!RootNode.Container.Data.Stats){
(RootNode.Container.Data.Stats = c('div')).innerHTML = '<h3>Image statis\
tics data</h3><div style="text-align:center;padding-top:10px"><img src=".files/u\
nfinished.gif" style="width:38px;height:37px" /></div>';
RootNode.Container.Data.Stats.Type = 4;
}
NodeHandle(RootNode, RootNode.Container.Data.Stats);
}
function RoundBorder(upper){
var wrap = c('b');
wrap.className = upper ? 'top' : 'bottom';
for(var i = 1; i < 5; i++)
(wrap.appendChild(c('b'))).className = 'x' + (upper ? i : 5 - i);
return wrap;
}
function Kbd(e){
var Button = '';
if(Root.Focus){
switch ((e ? e : event).keyCode){
case 73:	
Button = 'ds';
break;
case 69:	
Button = 'ex';
break;
case 83:	
Button = 'se';
break;
case 68:	
Button = 'st';
break;
case 72:
Button = 'hl';
break;
case 32:	
case 70:	
Button = 'fw';
break;
case 77:	
Button = 'zf';
break;
case 82:	
Button = 'zp';
break;
case 90:	
Button = 'zw';
break;
case 80:	
with(Root.Focus)
if(Container4Panel.firstChild){
Container4Panel.removeChild(Panel);
for(var i in Panel.Button);
Panel.Button[i].style.borderStyle = 'solid';
}
else
Root.Focus.Container4Panel.appendChild(Root.Focus.Panel);
if(Root.HintImg.parentNode){
Root.HintImg.parentNode.removeChild(Root.HintImg);
document.onmousemove = null;
}
break;
case 8:	
case 66:	
Button = 'bw';
break;
case 27:	
Root.Close(Root.Focus);
break;
case 107:	
case 61:	
Button = 'zi';
break;
case 109:	
Button = 'zo';
break;
}
if(Button)
Root.Focus.Panel.Button[Button].onclick();
}
}
function g(Id) {  
return document.getElementById(Id);
}
function t(txt) {  
return document.createTextNode(txt);
}
function c(tag) { 
return document.createElement(tag);
}
var Elem = document.documentElement, Design = {
OfGlobal:0xf,		
OfViewer:0xf0,		
FloatZoomExp:0x700,	
FloatZoomSize:0x1800,	
AutoCenterImg:0x10000,	
FixedZoom:0x20000,	
ButtonThImg:0x40000,	
AutoShowDsc:0x80000,	
Indicator:0x100000,	
IndicatorThImg:0x200000,
Panel:0x400000,		
FloatZoom:0x800000,	
AllowMultiple:0x1000000,
OrigFloatZoom:0x2000000,
Valid:0x20000000,	
Settings:0x327d0000,	
Link:null,
Init:function() {
var Foot = null, Select = (Foot = g('foot').getElementsByTagName('div')[0]).insertBefore(c('select'), 
Foot.firstChild), re = new RegExp('bx=[^;]+', 'i'), 
tmp = parseInt(document.cookie.match(re) ? document.cookie.match(re)[0].split('=')[1] : '');
if(Root.IE6)
Design.Global = Select;
Select.Mask = Design.OfGlobal;
Select.onchange = Design.SelectHandler;
Select.appendChild(c('optgroup')).label = 'Global design';
Select.options[0] = new Option('Default',0);
Design.Link = document.getElementsByTagName('head').item(0).getElementsByTagName('link');
for (var i = global = local = 0, sheet; sheet = Design.Link[i]; i++)
if(sheet.className)
Select.options[Select.options.length] = new Option(sheet.title,sheet.Id = ++global);
else
if(sheet.title)
sheet.Id = local += 16;
if (tmp & Design.Valid) {
Design.Settings = tmp;
if(!Root.Opera)
Design.SetStyle();
for (var i = 0, Ptr; Ptr = Select.options[i]; i++)
if (Ptr.value == (Design.Settings & Design.OfGlobal))
Ptr.selected = 'selected';
}
else	
Design.Settings |= Design.Valid;
},SaveCookie:function() {
var expireDate = new Date();
expireDate.setDate(expireDate.getDate()+30);	
document.cookie = 'bx=' + Design.Settings + '; expires=' + expireDate.toGMTString() + '; path=/';
},SetStyle:function() {
for (var i = 0, Ptr; Ptr = Design.Link[i]; i++)
if(Ptr.Id)
Ptr.disabled = Ptr.Id & Design.OfGlobal ? Ptr.Id == (Design.Settings & Design.OfGlobal) 
? false : true : Ptr.Id == (Design.Settings & Design.OfViewer) ? false : true;
},SetBit:function(){
if(this.checked)
Design.Settings |= this.Mask;
else
Design.Settings &= ~this.Mask;
if(Root.Opera)
Design.SaveCookie();
},Zoom:function(){
if(Root.Opera)
Design.SaveCookie();
},SelectHandler:function(){
Design.Settings = Design.Settings & ~this.Mask | this.value;
Design.SetStyle();
if(Root.Opera)
Design.SaveCookie();
}
}, Root = {				
Cont:null,				
Focus:null,				
ThImg:null,				
ButtonImg:c('img'),			
SmileImg:c('img'),			
IdeaImg:c('img'),			
Unfinished:c('img'),			
GlobalZoom:1,				
NumOfImg:0,				
Indicator:c('div'),			
Settings:c('div'),			
ZoomWnd:c('div'),			
HintImg:c('img'),			
DragLock:0,				
Body:null,
Opera:(navigator.appName.indexOf('Opera')+1),
IE:(navigator.appVersion.indexOf('MSIE')+1),
IE6:((navigator.appVersion.indexOf('MSIE')+1)&&parseInt(navigator.appVersion.split('MSIE')[1])==6),
ExifKey:[],				
CheckBox:[
{Title:'auto center image',Mask:Design.AutoCenterImg},
{Title:'allow multiple instances',Mask:Design.AllowMultiple},
{Title:'auto-show floating zoom window',Mask:Design.FloatZoom},
{Title:'download original image for floating zoom',Mask:Design.OrigFloatZoom},
{Title:'remember zoom from last clicked image',Mask:Design.FixedZoom},
{Title:'show hint image over navigation bar',Mask:Design.IndicatorThImg},
{Title:'show hint image over buttons',Mask:Design.ButtonThImg},
{Title:'auto-show description',Mask:Design.AutoShowDsc},
{Title:'show navigation bar',Mask:Design.Indicator},
{Title:'show control panel',Mask:Design.Panel}],
Button:{
'ds':{Title:'Image description', Handler:Description},
'bw':{
Title:'',
Handler:function(){
var Panel = this.parentNode;
if(Panel.Position){
Panel.Position--;
Root.LoadImg(this.RootNode);
if(Panel.Position) 
Root.HintImg.src = Root.ThImg[Panel.Position - 1].src;
}
}
},
'fw':{
Title:'',
Handler:function(){
var Panel = this.parentNode;
if(Root.NumOfImg - Panel.Position - 1){
Panel.Position++;
Root.LoadImg(this.RootNode);
if(Root.NumOfImg - Panel.Position - 1)
Root.HintImg.src = Root.ThImg[Panel.Position + 1].src
}
}
},
'zi':{
Title:'Zoom 110%',
Handler:function(){
Root.GlobalZoom = this.RootNode.Zoom *= 1.1;
Root.Zoom(this.RootNode);
}
},
'zo':{
Title:'Zoom 91%',
Handler:function(){
Root.GlobalZoom = this.RootNode.Zoom *= 1/1.1;
Root.Zoom(this.RootNode);
}
},
'zf':{
Title:'Zoom to browser width',
Handler:function(){
var RootNode = this.RootNode;
if(!RootNode.OldX){
RootNode.OldX = RootNode.style.left;
RootNode.OldY = RootNode.style.top;
}
if(RootNode.Image.Width){
RootNode.style.left = Elem.scrollLeft + 'px';
RootNode.style.top = Elem.scrollTop + 'px';
Root.GlobalZoom = RootNode.Zoom = 
(Elem.clientWidth - 2) / RootNode.Image.Width;
}
Root.Zoom(RootNode);
}
},
'zw':{
Title:'Toggle floating zoom window',
Handler:function(e){
if(this.RootNode.ZoomWndEnable = this.RootNode.ZoomWndEnable ? 0 : 1);
else
if(Root.ZoomWnd.parentNode)
Root.ZoomWnd.parentNode.removeChild(Root.ZoomWnd);
else;
}
},
'zp':{
Title:'Zoom 100% (RESET)',
Handler:function(){
var RootNode = this.RootNode;
Root.GlobalZoom = RootNode.Zoom = 1;
Root.Zoom(RootNode);
if(RootNode.OldX){
RootNode.style.left = RootNode.OldX;
RootNode.style.top = RootNode.OldY;
RootNode.OldX = RootNode.OldY = '';
}
}
},
'ex':{Title:'Image data (EXIF)', Handler:Exif},
'st':{Title:'Image statistics data', Handler:Stats},
'se':{
Title:'Viewer settings',
Handler:function(){
with(this.RootNode.Info)
hasChildNodes() ? firstChild.Settings ? removeChild(Root.Settings) : 
replaceChild(Root.Settings, firstChild) : appendChild(Root.Settings);
}
},
'hl':{Title:'Help', Handler:Help},
'hi':{
Title:'Close',
Handler:function(){
Root.Close(this.RootNode);
}
}
}, Init:function(){
if(Root.IE && parseInt(navigator.appVersion.split('MSIE')[1]) < 6)
return;
document.onkeydown = Kbd;
window.onload = Root.BackgroundProcessing;
window.onunload = Design.SaveCookie;
Root.Body = document.body;
Root.NumOfImg = (Root.ThImg = 
(Root.Cont = g('cont')).getElementsByTagName('img')).length;
Design.Init();
with(Root){
IdeaImg.src = 'idea.gif';		
SmileImg.src = 'smile.gif';		
ButtonImg.src = 'buttons.gif';	
Unfinished.src = 'unfinished.gif';	
}
Root.Cont.style.padding='1px 0 1px 5px';
for (var i = 0, ParentBox, ThImg; ThImg = Root.ThImg[i]; i++)
{
ThImg.Index = i;
ThImg.onclick = Root.Open;
ThImg.ExifTag = ThImg.nextSibling; 
(ParentBox = c('div')).className = ThImg.className ? 'ph ud' : 'ph';
Root.Cont.replaceChild(ParentBox, ThImg.parentNode);
ParentBox.appendChild(ThImg);
ParentBox.appendChild(ThImg.Desc = c('div')).ThImg = ThImg;
ThImg.Desc.appendChild(c('span')).appendChild(t(i+1));
ThImg.Desc.lastChild.className = 'count';
i%5 || (Root.Cont.insertBefore(c('div'),ParentBox).className = 's');
ThImg.Desc.onclick = function(e){this.ThImg.onclick(e)};
ThImg.onmouseover = ThImg.Desc.onmouseover = function(){this.parentNode.id = 'over'};
ThImg.onmouseout = ThImg.Desc.onmouseout = function(){this.parentNode.id = ''};
ThImg.Desc.appendChild(t(ThImg.title ? ThImg.title.length > 14 
? ThImg.title.substr(0,11) + '...' : ThImg.title : '-'));
ThImg.Desc.title = ThImg.title;
}
Root.Cont.appendChild(c('div')).className = 's';
}, BackgroundProcessing:function(){	
var Body = c('div'), FieldSet = c('fieldset'), Select = c('select'), 
Zoom = c('Select'),  Data = [], Repeat = [];
Body.appendChild(c('h3')).appendChild(t('Viewer settings'));
for(var i = 0, Ptr; Ptr = Root.CheckBox[i]; i++){
var Item = c('div'), Box = c('input');
Box.onchange = Design.SetBit;
Box.type = 'checkbox';
Body.appendChild(Item).appendChild(Box);
Item.appendChild(t(Ptr.Title));
if(Root.IE6)
Box.defaultChecked=Design.Settings & (Box.Mask = Ptr.Mask);
else
Box.checked=Design.Settings & (Box.Mask = Ptr.Mask);
}
Zoom.appendChild(c('optgroup')).label = 'Floating zoom';
(Zoom.options[0] = new Option('Auto',0)).selected = 
(Design.Settings & Design.FloatZoomExp) - 0xff ? null : 'selected';
Zoom.options[0].Value = 1.1;
for (var i = 1, k = 0, Value = 0; i < 8; i++){
(Zoom.options[i] = new Option(Math.round((Value = Math.pow(1.3, i)) * 100) + '%', k = i << 8)).selected =
(Design.Settings & Design.FloatZoomExp) - k ? null : 'selected';
Zoom.options[i].Value = Value;
}
Zoom.onchange = Design.Zoom;
Zoom.disabled = true;
Select.Mask = Design.OfViewer;
Select.appendChild(c('optgroup')).label = 'Viewer design';
Select.options[0] = new Option('Default',0);
for(var i = 0, sheet; sheet = Design.Link[i]; i++)
if(sheet.Id & Design.OfViewer)
(Select.options[Select.options.length] = new Option(sheet.title,sheet.Id)).selected = 
sheet.Id == (Design.Settings & Design.OfViewer) ? 'selected' : null;
FieldSet.appendChild(c('legend')).appendChild(t('Miscellaneous'));
FieldSet.appendChild(Select).onchange = Design.SelectHandler;
Body.appendChild(FieldSet).className = 'design';
Root.Settings.appendChild(RoundBorder(1));
Root.Settings.appendChild(Body).className = 'de';
Root.Settings.appendChild(RoundBorder(0));
Root.Settings.Settings = 1;	
Root.HintImg.id = 'hint';
Root.ZoomWnd.Zoom = 2;
Root.ZoomWnd.className = 'zwnd';
Root.ZoomWnd.Image = (Root.ZoomWnd.Container4Img = Root.ZoomWnd.appendChild(c('div'))).appendChild(c('img'));
if(!Root.IE6)
for(var i = 0, Data = ['zwt','zwtb','zwbb','zwb'], Str; Str = Data[i]; i++)
(Root.ZoomWnd.appendChild(c('div'))).className = Str;
(Root.ZoomWnd.Wait4Img = c('span')).appendChild(t('Downloading ...'));
Root.ZoomWnd.onmouseout = function(){
document.onmousemove = null;
if(this.parentNode)
this.parentNode.removeChild(this);
};
Root.Indicator.className = 'ind';
Root.Indicator.NumOfRows = Math.ceil(Root.NumOfImg / 50);
Root.Indicator.style.height = (Root.Indicator.NumOfRows * 8) + 'px';
for (var k = i = 0, AvgNumImgPerRow = Root.NumOfImg / Root.Indicator.NumOfRows; 
i < Root.Indicator.NumOfRows; i++)
for (var NumOfImg = Math.round(AvgNumImgPerRow * (i + 1) - Math.round(AvgNumImgPerRow * i)), 
Width =  359  / NumOfImg - 1, j = 0; j < NumOfImg; j++){
var Box = c('div');
Box.style.width = Math.round(Width * (j + 1) - Math.round(Width * j)) + 'px';
Root.Indicator.appendChild(Box);
}
Data = Root.ThImg[0].ExifTag.firstChild.nodeValue.split('|');
Root.ThImg[0].ExifData = [];
for (var i = 0, Pair = []; i < Data.length; i++){
Pair = Data[i].split('#');
Root.ExifKey[i] = Pair[0];
if(Pair[1] == '$')
Root.ThImg[0].ExifData[i] = Repeat[i] = '';
else
Root.ThImg[0].ExifData[i] = Repeat[i] = Pair[1];
}
for (var i = 1, Ptr; Ptr = Root.ThImg[i]; i++){
Ptr.ExifData = [];
Data = Ptr.ExifTag.firstChild.nodeValue.split('|');
for (var j = 0; j < Data.length; j++)
if(Data[j])
if(Data[j] == '$')
Ptr.ExifData[j] = Repeat[j] = '';
else
Ptr.ExifData[j] = Repeat[j] = Data[j];
else
Ptr.ExifData[j] = Repeat[j];
}
for (var i = 0; i < Root.ExifKey.length; Root.ExifKey[i++] += ': ')
for (var j = 20 - Root.ExifKey[i].length; j > 0; j--)
Root.ExifKey[i] += '.';
if(Root.Opera)
Design.SetStyle();
}, Open:function(e){	
var RootNode = Root.Focus;
if(Design.Global){
g('foot').getElementsByTagName('div')[0].removeChild(Design.Global);
Design.Global=null;
};
if(!RootNode || (Design.Settings & Design.AllowMultiple)){
(RootNode = c('div')).className = 'root';
(RootNode.Panel = c('div')).className = 'panel';
(RootNode.Container4Panel = c('div')).className = 'c4panel';
RootNode.Container4Panel.style.top = -(RootNode.Panel.HeightOfPanel = 
Design.Settings & Design.Indicator ? 37 + Root.Indicator.NumOfRows * 8 : 31) + 'px';
RootNode.appendChild(RootNode.Container4Panel);
RootNode.Panel.style.height = (RootNode.Panel.HeightOfPanel - 6) + 'px';
if(Design.Settings & Design.Panel)
RootNode.Container4Panel.appendChild(RootNode.Panel);
RootNode.appendChild(RootNode.Container4Img = c('div')).className = 'c4img';
(RootNode.Image = c('img')).className = 'img';
RootNode.Image.src = this.src.replace('/.th_','/.');
(RootNode.Info = c('div')).className = 'info';
RootNode.appendChild(RootNode.Info);
RootNode.ZoomWndEnable = Design.Settings & Design.FloatZoom;
RootNode.Located = RootNode.ImgLoaded = RootNode.Wait4Img = 0;
RootNode.ExifData = this.ExifData;
RootNode.Title = this.title;
(RootNode.Container = c('div')).appendChild(RoundBorder(1));
(RootNode.Container.Data = RootNode.Container.appendChild(c('div'))).className = 'de';
RootNode.Container.appendChild(RoundBorder(0));
(RootNode.Container.Data.Desc = c('h3')).appendChild(t(''));
RootNode.Container.Data.appendChild(RootNode.Container.Data.Desc);
RootNode.Container.Data.Desc.Type = 1;
RootNode.Zoom = Design.Settings & Design.FixedZoom ? Root.GlobalZoom : 1;
Drag.Init(RootNode,e);
RootNode.Panel.Button = [];
for(var i in Root.Button){
var Box = RootNode.Panel.Button[i] = c('div');
(Box.title = Root.Button[i].Title) || (Box.Src = '');
Box.className = i;
Box.Button = 1;
Box.RootNode = RootNode;
Box.onclick = Root.Button[i].Handler;
Box.onmousedown = function(){this.style.borderStyle = 'inset'};
Box.onmouseup = function(){this.style.borderStyle = 'outset'};
Box.onmouseover = Drag.HintImg;
Box.onmouseout = Drag.HintImgHide;
RootNode.Panel.appendChild(Box);
}
if(Design.Settings & Design.Indicator){
(RootNode.Panel.appendChild(RootNode.Panel.Container4Indicator = c('div'))).className = 'c4ind';
(RootNode.Panel.Container4Indicator.appendChild(RootNode.Panel.Indicator =
Root.Indicator.cloneNode(1))).Box = [];
for(var i = 0, Box; Box = RootNode.Panel.Indicator.childNodes[i];){
Box.RootNode = RootNode;
Box.onmouseover = Drag.HintImg;
Box.onmouseout = Drag.HintImgHide;
Box.onclick = function(e){
if(RootNode.Panel.Position != this.Index){
RootNode.Panel.Position = this.Index;
Root.LoadImg(RootNode);
}
};
RootNode.Panel.Indicator.Box[i] = Box;
Box.Src = Root.ThImg[i].src;
Box.Index = i;
Box.Indicator = 1;
Box.title = (++i) + '/' + Root.NumOfImg;
}
RootNode.Panel.Indicator.Active = RootNode.Panel.Indicator.Box[0];
}
}
else{
if(!(Design.Settings & Design.AutoCenterImg)){
Drag.XY(e);
RootNode.style.left = (Drag.X - 300) + 'px';
RootNode.style.top = (Drag.Y - 100) + 'px';
}
RootNode.Located = 0;
}
RootNode.Panel.Position = this.Index;
Root.LoadImg(RootNode);
return false;
}, LoadImg:function(RootNode){
if (RootNode.ImgLoaded||RootNode.Wait4Img){
Wait4Size.Clear();
var Old = RootNode.Container4Img.removeChild(RootNode.Image);
Old.src = Root.ButtonImg.src;
delete Old;
with(Root.ThImg[RootNode.Panel.Position]){
(RootNode.Image = c('img')).src = src.replace('/.th_','/.');
RootNode.ExifData = ExifData;
RootNode.Title = title;
}
RootNode.Image.onmouseover = Drag.ZoomWndInit;
RootNode.Image.Zoom = RootNode.Zoom;
RootNode.Image.className = 'img';
RootNode.Image.onload = Root.CloneImg4Zoom;
}
if(RootNode.Panel.Indicator || (Design.Settings & Design.Indicator) && RootNode.Panel.Indicator)
with(RootNode.Panel.Indicator){
Active.className = '';
Active = Box[RootNode.Panel.Position];
Active.className = 'mark';
}
with(RootNode)
if(Panel.parentNode){
with(Panel.Button['fw']){
title = (Panel.Position + 2) + '/' + Root.NumOfImg;
Src = Root.NumOfImg - Panel.Position - 1 ? Root.ThImg[Panel.Position + 1].src : '';
style.visibility = Root.NumOfImg - Panel.Position - 1 ? 'visible' : 'hidden';
}
with(Panel.Button['bw']){
title = Panel.Position + '/' + Root.NumOfImg;
Src = Panel.Position ? Root.ThImg[Panel.Position - 1].src : '';
style.visibility = Panel.Position ? 'visible' : 'hidden';
}
if(!(Root.NumOfImg - Panel.Position - 1 && Panel.Position) && Root.HintImg.parentNode){
Root.HintImg.parentNode.removeChild(Root.HintImg);
document.onmousemove = null;
}
}
Wait4Size.Init(RootNode);
}, Close:function(RootNode){
document.body.removeChild(RootNode);
RootNode.Image.src = Root.ButtonImg.src;
if(Root.Focus == RootNode)
Root.Focus = null;
delete RootNode;
}, CloneImg4Zoom:function(){
this.ZoomImg = this.cloneNode(0);
this.ZoomImg.width = Math.round(this.Zoom * this.Width * Root.ZoomWnd.Zoom);
this.ZoomImg.height = Math.round(this.Zoom * this.Height * Root.ZoomWnd.Zoom);
Root.ZoomWnd.Image = this.ZoomImg;
Root.ZoomWnd.Image.style.left = Math.round((-Drag.Left - 78) * Root.ZoomWnd.Zoom + 80) + 'px';
Root.ZoomWnd.Image.style.top = Math.round((-Drag.Top - 58) * Root.ZoomWnd.Zoom + 60) + 'px';
var garbage = Root.ZoomWnd.Container4Img.replaceChild(Root.ZoomWnd.Image, Root.ZoomWnd.Container4Img.firstChild);
delete garbage; 
}, Zoom:function(RootNode){
with(RootNode){
with(Image)
if(!Width && width > 33){
Width = width;
Height = height;
}
if(Image.Width){
Container4Img.style.width = (Image.width = Math.round(Zoom * Image.Width)) + 'px';
Container4Img.style.height = (Image.height = Math.round(Zoom * Image.Height)) + 'px';
if(!Image.Original && Image.ZoomImg){
Image.ZoomImg.width = Math.round(Zoom * Image.Width * Root.ZoomWnd.Zoom);
Image.ZoomImg.height = Math.round(Zoom * Image.Height * Root.ZoomWnd.Zoom);
}
else
if(Image.Original){
Root.ZoomWnd.Zoom = Image.Original.width/Image.width;
Image.Original.style.left = Math.round((-Drag.Left - 78) * Root.ZoomWnd.Zoom + 80) + 'px';
Image.Original.style.top = Math.round((-Drag.Top - 58) * Root.ZoomWnd.Zoom + 60) + 'px';
}
RootNode.Panel.Button['zo'].title = 'Zoom ' + Math.round(Zoom * 90.9090909) + '%';
RootNode.Panel.Button['zi'].title = 'Zoom ' + Math.round(Zoom * 110) + '%';
RootNode.Panel.Button['zp'].title = Zoom - 1 ? 'Zoom ' + Math.round(Zoom * 100) + 
'% --> 100% (RESET)' : Root.Button['zp'].Title;
}
}
}
}, Drag = {
X:0,
Y:0,
LastX:0, 
LastY:0,
Left:0,
Top:0,
Box:null,
Init:function(RootNode,e){
Drag.XY(e);
RootNode.style.left = (Drag.X - 300) + 'px';
RootNode.style.top = (Drag.Y - 100) + 'px';
RootNode.Info.onmousedown = RootNode.Container4Img.onmousedown = Drag.RootNode;
RootNode.Image.onmouseover = Drag.ZoomWndInit;
RootNode.Image.Zoom = RootNode.Zoom;
RootNode.Image.onload = Root.CloneImg4Zoom;
RootNode.Container4Img.ondblclick = function(){Root.Close(RootNode)};
},HintImg:function(e){
if(Root.ZoomWnd.parentNode || Root.DragLock)
return;
if(this.Src && (this.Indicator && (Design.Settings & Design.IndicatorThImg) || 
this.Button && (Design.Settings & Design.ButtonThImg))){
Drag.XY(e);
Root.HintImg.src = this.Src;
Drag.Box = Root.HintImg;
document.onmousemove = Root.IE ? Drag.WndIE : Drag.WndFF;
Root.HintImg.style.left = (Drag.X - parseInt(this.RootNode.style.left) + 10) + 'px';
Root.HintImg.style.top = (Drag.Y - parseInt(this.RootNode.style.top) + 10) + 'px';
this.RootNode.appendChild(Root.HintImg);
}
if(this.Button)
this.style.borderStyle = 'outset';
},HintImgHide:function(){
if(Root.HintImg.parentNode){ 
this.RootNode.removeChild(Root.HintImg);
document.onmousemove = null;
}
if(this.Button)
this.style.borderStyle = 'solid';
},ZoomWndInit:function(e){
var RootNode = this.parentNode.parentNode;
if(Root && RootNode.ZoomWndEnable && !Root.DragLock){
Drag.XY(e); 
if(Design.Settings & Design.OrigFloatZoom)
if(RootNode.Image.Original){
Root.ZoomWnd.Image = RootNode.Image.Original;
Root.ZoomWnd.Zoom =
Root.ZoomWnd.Image.width/RootNode.Image.width;
}
else{
Root.ZoomWnd.appendChild(Root.ZoomWnd.Wait4Img);
(RootNode.Image.Original = c('img')).src =
Root.ThImg[RootNode.Panel.Position].src.replace('/.th_','/');
RootNode.Image.Original.onload = function(){
if(Root.ZoomWnd.Wait4Img.parentNode)
Root.ZoomWnd.removeChild(Root.ZoomWnd.Wait4Img);
Root.ZoomWnd.Zoom =
this.width/RootNode.Image.width;
Root.ZoomWnd.Image = this;
this.style.left = Math.round((-Drag.Left - 78) * Root.ZoomWnd.Zoom + 80) + 'px';
this.style.top = Math.round((-Drag.Top - 58) * Root.ZoomWnd.Zoom + 60) + 'px';
Root.ZoomWnd.Container4Img.replaceChild(this, Root.ZoomWnd.Container4Img.firstChild);
};
}
else
if(RootNode.Image.ZoomImg){
Root.ZoomWnd.Image = RootNode.Image.ZoomImg;
}
if(Root.HintImg.parentNode)
Root.HintImg.parentNode.removeChild(Root.HintImg);
Drag.Box = Root.ZoomWnd;
document.onmousemove = Root.IE ? Drag.ZoomWndIE : Drag.ZoomWndFF;
Drag.Box.style.left = (Drag.Left = Drag.X - parseInt(RootNode.style.left) - 80) + 'px';
Drag.Box.style.top = (Drag.Top = Drag.Y - parseInt(RootNode.style.top) - 60) + 'px';
Drag.Box.Image.style.left = Math.round((-Drag.Left - 78) * Drag.Box.Zoom + 80) + 'px';
Drag.Box.Image.style.top = Math.round((-Drag.Top - 58) * Drag.Box.Zoom + 60) + 'px';
var garbage = Root.ZoomWnd.Container4Img.replaceChild(Drag.Box.Image, Root.ZoomWnd.Container4Img.firstChild);
delete garbage;
RootNode.Container4Img.appendChild(Drag.Box);
}
return false;
},RootNode:function(e){
Root.DragLock = 1;
Root.Ptr = Root.ZoomWnd.parentNode ? Root.ZoomWnd.parentNode.removeChild(Root.ZoomWnd) : null;
Drag.XY(e);				
Drag.Box = this.parentNode;		
document.onmousemove = Root.IE ? Drag.WndIE : Drag.WndFF;
document.onmouseup = Drag.End;
if(Root.Focus != Drag.Box)
Root.GlobalZoom = (Root.Focus = 
document.body.appendChild(document.body.removeChild(Drag.Box))).Zoom;
return false; 
},ZoomWndIE:function(){
Drag.Box.style.left = (Drag.Left = Drag.Left - Drag.LastX + (Drag.LastX = event.clientX + document.documentElement.scrollLeft)) + 'px';
Drag.Box.style.top = (Drag.Top = Drag.Top - Drag.LastY + (Drag.LastY = event.clientY + document.documentElement.scrollTop)) + 'px';
Drag.Box.Image.style.left = Math.round((-Drag.Left - 78) * Drag.Box.Zoom + 80) + 'px';
Drag.Box.Image.style.top = Math.round((-Drag.Top - 58) * Drag.Box.Zoom + 60) + 'px';
return false; 
},ZoomWndFF:function(e){
Drag.Box.style.left = (Drag.Left = Drag.Left - Drag.LastX + (Drag.LastX = e.pageX)) + 'px';
Drag.Box.style.top = (Drag.Top = Drag.Top - Drag.LastY + (Drag.LastY = e.pageY)) + 'px';
Drag.Box.Image.style.left = Math.round((-Drag.Left - 78) * Drag.Box.Zoom + 80) + 'px';
Drag.Box.Image.style.top = Math.round((-Drag.Top - 58) * Drag.Box.Zoom + 60) + 'px';
return false; 
},WndIE:function(){
Drag.Box.style.left = (parseInt(Drag.Box.style.left) - Drag.LastX + 
(Drag.LastX = event.clientX + document.documentElement.scrollLeft)) + 'px';
Drag.Box.style.top = (parseInt(Drag.Box.style.top) - Drag.LastY + 
(Drag.LastY = event.clientY + document.documentElement.scrollTop)) + 'px';
return false;
},WndFF:function(e){
Drag.Box.style.left = (parseInt(Drag.Box.style.left) - Drag.LastX + (Drag.LastX = e.pageX)) + 'px';
Drag.Box.style.top = (parseInt(Drag.Box.style.top) - Drag.LastY + (Drag.LastY = e.pageY)) + 'px';
return false; 
},End:function(e){
Root.DragLock = 0;
document.onmouseup = document.onmousemove = null;
if(Root.Ptr)
Root.Focus.Image.onmouseover(e);
Root.Ptr = null;
},XY:function(e){
Drag.LastX = Drag.X = e ? e.pageX : event.clientX + document.documentElement.scrollLeft;
Drag.LastY = Drag.Y = e ? e.pageY : event.clientY + document.documentElement.scrollTop;
}
},  Wait4Size = { 
Id:0,
Node:null,
Init:function(RootNode){
Wait4Size.Clear();
Wait4Size.Node = RootNode;
RootNode.Image.Width = RootNode.Image.Height = 0;
if(RootNode.ImgLoaded)
RootNode.ImgLoaded = 0;
RootNode.Wait4Img = 1;
Wait4Size.Loop();
},Clear:function(){
if (Wait4Size.Node && Wait4Size.Node.Wait4Img){
clearTimeout(Wait4Size.Id);
Wait4Size.Node.Wait4Img = 0;
Wait4Size.Finish();
}
},Loop:function(){
if (Wait4Size.Node.Wait4Img && Wait4Size.Node.Image.width < 33)
Wait4Size.Id = setTimeout(Wait4Size.Loop, 50);
else {
with (Wait4Size.Node)
if(Wait4Img){
with(Image){
Width = width;
Height = height;
}
Wait4Img = 0;
if(Wait4Size.Node.OldX)
Panel.Button['zf'].onclick();
else
Root.Zoom(Wait4Size.Node);	
if(!Wait4Size.Node.Located && (Design.Settings & Design.AutoCenterImg)){
var Height = (Root.Opera ? document.body.clientHeight : Elem.clientHeight) - 2 - Image.height;
style.left = Math.round((Elem.clientWidth - 2 - Image.width) / 2) + 'px';
style.top = (Elem.scrollTop + Math.round((Height < 0 ? 0 : Height) / 2)) + 'px';
Wait4Size.Node.Located = 1;
}
}
Wait4Size.Finish();
}
}, Finish:function(){	
with(Wait4Size.Node){
Container4Img.appendChild(Image);
if(!Wait4Size.Node.ImgLoaded)
Root.Body.appendChild(Root.Focus = Wait4Size.Node);	
Wait4Size.Node.ImgLoaded = 1;
if(Design.Settings & Design.AutoShowDsc){
if(Info.hasChildNodes()){
if(!Info.firstChild.Settings && !(Info.firstChild.childNodes[1].firstChild.Type - 1)){
if(Title)
Container.Data.Desc.firstChild.nodeValue = Title;
else
Info.removeChild(Info.firstChild);
return;
}
}
else
if(Title){
Container.Data.Desc.firstChild.nodeValue = Title;
Container.Data.replaceChild(Container.Data.Desc, Container.Data.firstChild);
Info.appendChild(Container);
return;
}
}
else
if(Info.hasChildNodes() && !Info.firstChild.Settings && 
!(Info.firstChild.childNodes[1].firstChild.Type - 1)){
Info.removeChild(Info.firstChild);
return;
}
if(Info.hasChildNodes() && !Info.firstChild.Settings && 
!(Info.firstChild.childNodes[1].firstChild.Type - 3)){
with(Container.Data.Exif){
Header.firstChild.nodeValue = 'Image data'+(ExifData.length > 1 
? ', EXIF' : ' (EXIF is not available)');
ExifData[0].firstChild.nodeValue = Image.src;
ExifData[1].firstChild.nodeValue = 'Dimensions..........: ' + 
Image.Width + ' x ' + Image.Height + ' [px]';
}
for(var i = 0; i < ExifData.length; i++)
Container.Data.Exif.ExifData[i+2].firstChild.nodeValue = Root.ExifKey[i] + (ExifData[i] ? ExifData[i] : 'N/A');
}
}
}
};
