gdjs.level1Code = {};
gdjs.level1Code.GDPlayerObjects1= [];
gdjs.level1Code.GDPlayerObjects2= [];
gdjs.level1Code.GDFloorObjects1= [];
gdjs.level1Code.GDFloorObjects2= [];
gdjs.level1Code.GDbridgeLogsObjects1= [];
gdjs.level1Code.GDbridgeLogsObjects2= [];
gdjs.level1Code.GDTreeObjects1= [];
gdjs.level1Code.GDTreeObjects2= [];
gdjs.level1Code.GDenemyObjects1= [];
gdjs.level1Code.GDenemyObjects2= [];
gdjs.level1Code.GDRightObjects1= [];
gdjs.level1Code.GDRightObjects2= [];
gdjs.level1Code.GDLeftObjects1= [];
gdjs.level1Code.GDLeftObjects2= [];
gdjs.level1Code.GDCoinObjects1= [];
gdjs.level1Code.GDCoinObjects2= [];
gdjs.level1Code.GDScoreObjects1= [];
gdjs.level1Code.GDScoreObjects2= [];
gdjs.level1Code.GDstauteObjects1= [];
gdjs.level1Code.GDstauteObjects2= [];
gdjs.level1Code.GDrestartObjects1= [];
gdjs.level1Code.GDrestartObjects2= [];
gdjs.level1Code.GDHouseAlt1Objects1= [];
gdjs.level1Code.GDHouseAlt1Objects2= [];
gdjs.level1Code.GDexitObjects1= [];
gdjs.level1Code.GDexitObjects2= [];
gdjs.level1Code.GDleftbuttonObjects1= [];
gdjs.level1Code.GDleftbuttonObjects2= [];
gdjs.level1Code.GDrightbuttonObjects1= [];
gdjs.level1Code.GDrightbuttonObjects2= [];
gdjs.level1Code.GDjumpObjects1= [];
gdjs.level1Code.GDjumpObjects2= [];
gdjs.level1Code.GDendObjects1= [];
gdjs.level1Code.GDendObjects2= [];

gdjs.level1Code.conditionTrue_0 = {val:false};
gdjs.level1Code.condition0IsTrue_0 = {val:false};
gdjs.level1Code.condition1IsTrue_0 = {val:false};
gdjs.level1Code.condition2IsTrue_0 = {val:false};


gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.level1Code.GDexitObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.level1Code.GDPlayerObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.level1Code.GDendObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.level1Code.GDPlayerObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.level1Code.GDCoinObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.level1Code.GDenemyObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.level1Code.GDRightObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.level1Code.GDenemyObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.level1Code.GDLeftObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.level1Code.GDrestartObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.level1Code.GDPlayerObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.level1Code.GDenemyObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.level1Code.GDPlayerObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDHouseAlt1Objects1Objects = Hashtable.newFrom({"HouseAlt1": gdjs.level1Code.GDHouseAlt1Objects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDleftbuttonObjects1Objects = Hashtable.newFrom({"leftbutton": gdjs.level1Code.GDleftbuttonObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDrightbuttonObjects1Objects = Hashtable.newFrom({"rightbutton": gdjs.level1Code.GDrightbuttonObjects1});
gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDjumpObjects1Objects = Hashtable.newFrom({"jump": gdjs.level1Code.GDjumpObjects1});
gdjs.level1Code.eventsList0 = function(runtimeScene) {

{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.level1Code.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.level1Code.GDRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.level1Code.GDexitObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.level1Code.GDrestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("staute"), gdjs.level1Code.GDstauteObjects1);
{for(var i = 0, len = gdjs.level1Code.GDRightObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDRightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.level1Code.GDLeftObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.level1Code.GDstauteObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDstauteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.level1Code.GDrestartObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDrestartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.level1Code.GDexitObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDexitObjects1[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
gdjs.level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.level1Code.condition0IsTrue_0.val = true;
        gdjs.level1Code.GDPlayerObjects1[k] = gdjs.level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.level1Code.GDPlayerObjects1.length = k;}if ( gdjs.level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.level1Code.condition1IsTrue_0.val = true;
        gdjs.level1Code.GDPlayerObjects1[k] = gdjs.level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.level1Code.GDPlayerObjects1.length = k;}}
if (gdjs.level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].setAnimationName("run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
gdjs.level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.level1Code.condition0IsTrue_0.val = true;
        gdjs.level1Code.GDPlayerObjects1[k] = gdjs.level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.level1Code.GDPlayerObjects1.length = k;}if ( gdjs.level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.level1Code.condition1IsTrue_0.val = true;
        gdjs.level1Code.GDPlayerObjects1[k] = gdjs.level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.level1Code.GDPlayerObjects1.length = k;}}
if (gdjs.level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].setAnimationName("ide");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.level1Code.condition0IsTrue_0.val = true;
        gdjs.level1Code.GDPlayerObjects1[k] = gdjs.level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.level1Code.GDPlayerObjects1.length = k;}if (gdjs.level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].setAnimationName("jump");
}
}}

}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.level1Code.GDexitObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
gdjs.level1Code.condition1IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDexitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.level1Code.condition0IsTrue_0.val ) {
{
gdjs.level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.level1Code.GDendObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDPlayerObjects1Objects, gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.level1Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDPlayerObjects1Objects, gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level1Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.level1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(100);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.level1Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.level1Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDScoreObjects1[i].setString("Score:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.level1Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.level1Code.GDexitObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.level1Code.GDrestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("staute"), gdjs.level1Code.GDstauteObjects1);
{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level1Code.GDstauteObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDstauteObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.level1Code.GDrestartObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDrestartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.level1Code.GDexitObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDexitObjects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.level1Code.GDRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.level1Code.GDenemyObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDenemyObjects1Objects, gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level1Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs.level1Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDenemyObjects1[i].addForce(50, 0, 1);
}
}{for(var i = 0, len = gdjs.level1Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDenemyObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.level1Code.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.level1Code.GDenemyObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDenemyObjects1Objects, gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level1Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs.level1Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDenemyObjects1[i].addForce(-(50), 0, 1);
}
}{for(var i = 0, len = gdjs.level1Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDenemyObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.level1Code.GDrestartObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
gdjs.level1Code.condition1IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDrestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.level1Code.condition0IsTrue_0.val ) {
{
gdjs.level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.level1Code.GDenemyObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDPlayerObjects1Objects, gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("HouseAlt1"), gdjs.level1Code.GDHouseAlt1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDPlayerObjects1Objects, gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDHouseAlt1Objects1Objects, false, runtimeScene, false);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level1Code.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.level1Code.GDexitObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.level1Code.GDrestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("staute"), gdjs.level1Code.GDstauteObjects1);
{for(var i = 0, len = gdjs.level1Code.GDstauteObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDstauteObjects1[i].setString("Win");
}
}{for(var i = 0, len = gdjs.level1Code.GDstauteObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDstauteObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.level1Code.GDrestartObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDrestartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level1Code.GDexitObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDexitObjects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("leftbutton"), gdjs.level1Code.GDleftbuttonObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDleftbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rightbutton"), gdjs.level1Code.GDrightbuttonObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDrightbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.level1Code.GDjumpObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDjumpObjects1Objects, runtimeScene, true, false);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
gdjs.level1Code.condition1IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.level1Code.condition0IsTrue_0.val ) {
{
gdjs.level1Code.condition1IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}}
if (gdjs.level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.level1Code.GDjumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("leftbutton"), gdjs.level1Code.GDleftbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightbutton"), gdjs.level1Code.GDrightbuttonObjects1);
{for(var i = 0, len = gdjs.level1Code.GDleftbuttonObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDleftbuttonObjects1[i].hide();
}
for(var i = 0, len = gdjs.level1Code.GDjumpObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDjumpObjects1[i].hide();
}
for(var i = 0, len = gdjs.level1Code.GDrightbuttonObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDrightbuttonObjects1[i].hide();
}
}}

}


};

gdjs.level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level1Code.GDPlayerObjects1.length = 0;
gdjs.level1Code.GDPlayerObjects2.length = 0;
gdjs.level1Code.GDFloorObjects1.length = 0;
gdjs.level1Code.GDFloorObjects2.length = 0;
gdjs.level1Code.GDbridgeLogsObjects1.length = 0;
gdjs.level1Code.GDbridgeLogsObjects2.length = 0;
gdjs.level1Code.GDTreeObjects1.length = 0;
gdjs.level1Code.GDTreeObjects2.length = 0;
gdjs.level1Code.GDenemyObjects1.length = 0;
gdjs.level1Code.GDenemyObjects2.length = 0;
gdjs.level1Code.GDRightObjects1.length = 0;
gdjs.level1Code.GDRightObjects2.length = 0;
gdjs.level1Code.GDLeftObjects1.length = 0;
gdjs.level1Code.GDLeftObjects2.length = 0;
gdjs.level1Code.GDCoinObjects1.length = 0;
gdjs.level1Code.GDCoinObjects2.length = 0;
gdjs.level1Code.GDScoreObjects1.length = 0;
gdjs.level1Code.GDScoreObjects2.length = 0;
gdjs.level1Code.GDstauteObjects1.length = 0;
gdjs.level1Code.GDstauteObjects2.length = 0;
gdjs.level1Code.GDrestartObjects1.length = 0;
gdjs.level1Code.GDrestartObjects2.length = 0;
gdjs.level1Code.GDHouseAlt1Objects1.length = 0;
gdjs.level1Code.GDHouseAlt1Objects2.length = 0;
gdjs.level1Code.GDexitObjects1.length = 0;
gdjs.level1Code.GDexitObjects2.length = 0;
gdjs.level1Code.GDleftbuttonObjects1.length = 0;
gdjs.level1Code.GDleftbuttonObjects2.length = 0;
gdjs.level1Code.GDrightbuttonObjects1.length = 0;
gdjs.level1Code.GDrightbuttonObjects2.length = 0;
gdjs.level1Code.GDjumpObjects1.length = 0;
gdjs.level1Code.GDjumpObjects2.length = 0;
gdjs.level1Code.GDendObjects1.length = 0;
gdjs.level1Code.GDendObjects2.length = 0;

gdjs.level1Code.eventsList0(runtimeScene);

return;

}

gdjs['level1Code'] = gdjs.level1Code;
