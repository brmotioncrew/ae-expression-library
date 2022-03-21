{
    "retimeKeys" : function(inPair,outPair) {
            /**
             * @name retimeKeys
             * @description retimes first two keyframes to inPoint of layer, and vice versa for outPoint
             * @property any
             * @example retimeKeys()
             * 
             * @returns {property} retimed keyframe value
             */
            const kIn=[1,2],kOut=[thisLayer.sub(thisProperty.numKeys,1),thisProperty.numKeys];let o,inD=thisLayer.sub(thisProperty.key(kIn[1]).time,thisProperty.key(kIn[0]).time),outD=thisLayer.sub(thisProperty.key(kOut[1]).time,thisProperty.key(kOut[0]).time);o=thisLayer.time<thisLayer.add(thisLayer.inPoint,inD)?thisLayer.ease(thisLayer.time,thisLayer.inPoint,thisLayer.add(thisLayer.inPoint,inD),thisProperty.key(kIn[0]).value,thisProperty.key(kIn[1]).value):thisLayer.ease(thisLayer.time,thisLayer.sub(thisLayer.outPoint,outD),thisLayer.outPoint,thisProperty.key(kOut[0]).value,thisProperty.key(kOut[1]).value);
            return o;
    }
}