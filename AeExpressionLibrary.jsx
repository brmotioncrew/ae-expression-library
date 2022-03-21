{

"retimeKeysToInAndOut": function() {/**
    @TLDR
const lib=footage("AeExpressionLibrary.jsx").sourceData;
lib.retimeKeysToInAndOut();

    @DOC
        * retimes first two keyframes to inPoint of layer, and vice versa for outPoint
        * @type             {Any}
        * @example                                          retimeKeys();
        * @returns          {Array}                         [x,(y,z)]  
        */
        const kIn=[1,2],kOut=[thisLayer.sub(thisProperty.numKeys,1),thisProperty.numKeys];let o,inD=thisLayer.sub(thisProperty.key(kIn[1]).time,thisProperty.key(kIn[0]).time),outD=thisLayer.sub(thisProperty.key(kOut[1]).time,thisProperty.key(kOut[0]).time);o=thisLayer.time<thisLayer.add(thisLayer.inPoint,inD)?thisLayer.ease(thisLayer.time,thisLayer.inPoint,thisLayer.add(thisLayer.inPoint,inD),thisProperty.key(kIn[0]).value,thisProperty.key(kIn[1]).value):thisLayer.ease(thisLayer.time,thisLayer.sub(thisLayer.outPoint,outD),thisLayer.outPoint,thisProperty.key(kOut[0]).value,thisProperty.key(kOut[1]).value);return o;
    },

    
"autoPos": function(L,positionX,positionY) {/**
    @TLDR
const lib=footage("AeExpressionLibrary.jsx").sourceData;
L=thisComp.layer("Layer 1");
lib.autoPos(L, "left", "top");

    @DOC
        * effectively parents layer to whichever corner of input layer (does not consider scale/rotation)
        * @type             {Transform > Position}
        * @param            {Layer Object}      L
        * @param            {String}            positionX   middle|left|right
        * @param            {String}            positionY   middle|top|bottom
        * @example                                          autoPos(thisComp.layer("Layer 1"), "left", "top");
        * @returns          {Array}                         [x,y]  
        */
        const p=L.toComp([0,0,0]),r=L.sourceRectAtTime(thisLayer.time);switch(positionX){case"left":x=p[0]+r.left;break;case"middle":x=p[0]+r.left+r.width/2;break;case"right":x=p[0]+r.left+r.width}switch(positionY){case"top":y=p[1]+r.top;break;case"middle":y=p[1]+r.top+r.height/2;break;case"bottom":y=p[1]+r.top+r.height}return [x,y];
    },

"autoPosShapeRect": function(positionX, positionY) {/**
    @TLDR
const lib=footage("AeExpressionLibrary.jsx").sourceData;
lib.autoPosShapeRect("left", "top");

    @DOC
        * description: moves anchor point of a rectangle/ellipse/polystar to one of its corners
        * @type             {Shape Layer > Shape Path > Position}
        * @param            {String}            positionX   middle|left|right
        * @param            {String}            positionY   middle|top|bottom
        * @example                                          autoPosShapeRect("left", "top");
        * @returns          {Array}                         [x,y]  
        */
    const s=thisProperty.propertyGroup().size;let x,y;switch(positionX){case"left":x=s[0]/2;break;case"middle":x=s[0]/2-s[0]/2;break;case"right":x=s[0]/2*-1}switch(positionY){case"top":y=s[1]/2;break;case"middle":y=s[1]/2-s[1]/2;break;case"bottom":y=s[1]/2*-1}return [x, y]
},

"autoScaleToFitComp" : function() {/**
    @TLDR
const lib=footage("AeExpressionLibrary.jsx").sourceData;
lib.autoScaleToFitComp()

    @DOC
        * dynamically fit Footage Layer scale to comp 
        * @type             {Transform>Scale}
        * @example                                             autoScaleToFitComp();
        * @returns          {Array}                            [x,y]
        */
    const fH=thisLayer.source.height,fW=thisLayer.source.width,cH=thisComp.height,cW=thisComp.width;let x=cW/fW*100,y=cH/fH*100;x>y&&(x=cH/fH*100),y>x&&(y=cW/fW*100);return [x,y];
},

"autoSizeRect" : function(L,padding) {/**
    @TLDR
const lib=footage("AeExpressionLibrary.jsx").sourceData;
const L=thisComp.layer("Layer 1");
const padding=0;
lib.autoSizeRect(L,padding)

    @DOC
        * sets rectangle the same size as bounding box of layer
        * @type             {Shape Layer> Shape Path > Size}
        * @param            {Layer Object}           L
        * @param            {Int}                    padding
        * @example                                                       autoSizeRect(thisComp.layer("Layer 1"),50)
        * @returns          {Array}                                      [x,y]
        */
    const rect=L.sourceRectAtTime(thisLayer.time);return[rect.width+padding,rect.height+padding];
}

}