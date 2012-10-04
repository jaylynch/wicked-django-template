var __bind=function(a,b){return function(){return a.apply(b,arguments)}},__hasProp=Object.prototype.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};define(["backbone","common/utils"],function(a,b){var c,d,e;return c=function(b){function c(){this.update=__bind(this.update,this),this.destroy=__bind(this.destroy,this),this.remove=__bind(this.remove,this),this.reset=__bind(this.reset,this),this.add=__bind(this.add,this),this.all=__bind(this.all,this),c.__super__.constructor.apply(this,arguments)}return __extends(c,b),c.prototype.viewClass=a.View,c.prototype.defaultContent=null,c.prototype.initialize=function(){this.childViews={},this.collection.bind("add",this.add),this.collection.bind("reset",this.reset),this.collection.bind("remove",this.remove),this.collection.bind("destroy",this.destroy),this.collection.bind("change",this.update);if(this.defaultContent)return this.collection.bind("all",this.all),this.defaultContent=this.$(this.defaultContent).detach(),this.el.append(this.defaultContent)},c.prototype.insertChild=function(a){return this.el.append(a.el)},c.prototype.all=function(){return this.collection.length?this.defaultContent.hide():this.defaultContent.show()},c.prototype.add=function(a){var b;return(b=this.childViews[a.id||a.cid])?clearTimeout(b._destroyTimer):(b=this.childViews[a.id||a.cid]=(new this.viewClass({model:a})).render(),this.insertChild(b)),b},c.prototype.reset=function(a,b){return a.each(this.add)},c.prototype.remove=function(a){var b,c=this;return b=this.childViews[a.id||a.cid],b.el.detach(),b._destroyTimer=setTimeout(function(){return c.destroy(a)},1e4)},c.prototype.destroy=function(a){return this.childViews[a.id||a.cid].el.remove()},c.prototype.update=function(a){var b;return b=this.childViews[a.id||a.cid],!b&&(b=this.childViews[a.cid])&&(this.childViews[a.id]=b,delete this.childViews[a.cid]),b.render()},c}(a.View),d={collapsedLength:5,getItems:function(){return this.el.children()},getHiddenItems:function(){return this.getItems().filter(":gt("+(this.collapsedLength-1)+")")},getExpanderText:function(){return"Show "+this.getHiddenItems().length+" more.."},renderExpander:function(){var a=this;return this.expander=this.$('<a class="expand-list" href="#">'+this.getExpanderText()+"</a>").bind("click",function(){return a.expand(),!1}),this.el.after(this.expander)},expand:function(){return this.getHiddenItems().show(),this.expander.remove()},collapse:function(){this.expander&&this.expander.remove();if(this.getItems().length>this.collapsedLength)return this.getHiddenItems().hide(),this.renderExpander()}},e=function(a){function b(){b.__super__.constructor.apply(this,arguments)}return __extends(b,a),b}(a.View),b.include(e,d),{View:c,ExpandableListMixin:d,ExpandableList:e}})