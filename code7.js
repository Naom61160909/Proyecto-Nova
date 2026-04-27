gdjs.PerdisteCode = {};
gdjs.PerdisteCode.localVariables = [];
gdjs.PerdisteCode.idToCallbackMap = new Map();
gdjs.PerdisteCode.GDTxt_9595perdisteObjects1= [];
gdjs.PerdisteCode.GDTxt_9595perdisteObjects2= [];
gdjs.PerdisteCode.GDTxt_9595perdisteObjects3= [];
gdjs.PerdisteCode.GDColisionObjects1= [];
gdjs.PerdisteCode.GDColisionObjects2= [];
gdjs.PerdisteCode.GDColisionObjects3= [];
gdjs.PerdisteCode.GDSueloObjects1= [];
gdjs.PerdisteCode.GDSueloObjects2= [];
gdjs.PerdisteCode.GDSueloObjects3= [];
gdjs.PerdisteCode.GDTeleportObjects1= [];
gdjs.PerdisteCode.GDTeleportObjects2= [];
gdjs.PerdisteCode.GDTeleportObjects3= [];
gdjs.PerdisteCode.GDCasillaInventarioObjects1= [];
gdjs.PerdisteCode.GDCasillaInventarioObjects2= [];
gdjs.PerdisteCode.GDCasillaInventarioObjects3= [];
gdjs.PerdisteCode.GDMarco_9595InterfazObjects1= [];
gdjs.PerdisteCode.GDMarco_9595InterfazObjects2= [];
gdjs.PerdisteCode.GDMarco_9595InterfazObjects3= [];
gdjs.PerdisteCode.GDInterfaz_9595VidaObjects1= [];
gdjs.PerdisteCode.GDInterfaz_9595VidaObjects2= [];
gdjs.PerdisteCode.GDInterfaz_9595VidaObjects3= [];
gdjs.PerdisteCode.GDInterfaz_9595ScoreObjects1= [];
gdjs.PerdisteCode.GDInterfaz_9595ScoreObjects2= [];
gdjs.PerdisteCode.GDInterfaz_9595ScoreObjects3= [];
gdjs.PerdisteCode.GDInterfaz_9595LlaveObjects1= [];
gdjs.PerdisteCode.GDInterfaz_9595LlaveObjects2= [];
gdjs.PerdisteCode.GDInterfaz_9595LlaveObjects3= [];
gdjs.PerdisteCode.GDTexto_9595VidaObjects1= [];
gdjs.PerdisteCode.GDTexto_9595VidaObjects2= [];
gdjs.PerdisteCode.GDTexto_9595VidaObjects3= [];
gdjs.PerdisteCode.GDTexto_9595ScoreObjects1= [];
gdjs.PerdisteCode.GDTexto_9595ScoreObjects2= [];
gdjs.PerdisteCode.GDTexto_9595ScoreObjects3= [];
gdjs.PerdisteCode.GDPosicion_9595Inicial_9595JugadorObjects1= [];
gdjs.PerdisteCode.GDPosicion_9595Inicial_9595JugadorObjects2= [];
gdjs.PerdisteCode.GDPosicion_9595Inicial_9595JugadorObjects3= [];
gdjs.PerdisteCode.GDllaveObjects1= [];
gdjs.PerdisteCode.GDllaveObjects2= [];
gdjs.PerdisteCode.GDllaveObjects3= [];
gdjs.PerdisteCode.GDPosicion_9595inicial_9595llaveObjects1= [];
gdjs.PerdisteCode.GDPosicion_9595inicial_9595llaveObjects2= [];
gdjs.PerdisteCode.GDPosicion_9595inicial_9595llaveObjects3= [];
gdjs.PerdisteCode.GDPuertaObjects1= [];
gdjs.PerdisteCode.GDPuertaObjects2= [];
gdjs.PerdisteCode.GDPuertaObjects3= [];
gdjs.PerdisteCode.GDJugador1Objects1= [];
gdjs.PerdisteCode.GDJugador1Objects2= [];
gdjs.PerdisteCode.GDJugador1Objects3= [];
gdjs.PerdisteCode.GDPanelPreguntaObjects1= [];
gdjs.PerdisteCode.GDPanelPreguntaObjects2= [];
gdjs.PerdisteCode.GDPanelPreguntaObjects3= [];
gdjs.PerdisteCode.GDTextoPreguntaObjects1= [];
gdjs.PerdisteCode.GDTextoPreguntaObjects2= [];
gdjs.PerdisteCode.GDTextoPreguntaObjects3= [];
gdjs.PerdisteCode.GDTexto2Objects1= [];
gdjs.PerdisteCode.GDTexto2Objects2= [];
gdjs.PerdisteCode.GDTexto2Objects3= [];
gdjs.PerdisteCode.GDBoton1Objects1= [];
gdjs.PerdisteCode.GDBoton1Objects2= [];
gdjs.PerdisteCode.GDBoton1Objects3= [];
gdjs.PerdisteCode.GDBoton2Objects1= [];
gdjs.PerdisteCode.GDBoton2Objects2= [];
gdjs.PerdisteCode.GDBoton2Objects3= [];
gdjs.PerdisteCode.GDTexto3Objects1= [];
gdjs.PerdisteCode.GDTexto3Objects2= [];
gdjs.PerdisteCode.GDTexto3Objects3= [];
gdjs.PerdisteCode.GDBoton3Objects1= [];
gdjs.PerdisteCode.GDBoton3Objects2= [];
gdjs.PerdisteCode.GDBoton3Objects3= [];
gdjs.PerdisteCode.GDTexto1Objects1= [];
gdjs.PerdisteCode.GDTexto1Objects2= [];
gdjs.PerdisteCode.GDTexto1Objects3= [];


gdjs.PerdisteCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}
}

}


};gdjs.PerdisteCode.asyncCallback19520204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PerdisteCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Universo", false);
}

{ //Subevents
gdjs.PerdisteCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.PerdisteCode.localVariables.length = 0;
}
gdjs.PerdisteCode.idToCallbackMap.set(19520204, gdjs.PerdisteCode.asyncCallback19520204);
gdjs.PerdisteCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PerdisteCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.PerdisteCode.asyncCallback19520204(runtimeScene, asyncObjectsList)), 19520204, asyncObjectsList);
}
}

}


};gdjs.PerdisteCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PerdisteCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.PerdisteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PerdisteCode.GDTxt_9595perdisteObjects1.length = 0;
gdjs.PerdisteCode.GDTxt_9595perdisteObjects2.length = 0;
gdjs.PerdisteCode.GDTxt_9595perdisteObjects3.length = 0;
gdjs.PerdisteCode.GDColisionObjects1.length = 0;
gdjs.PerdisteCode.GDColisionObjects2.length = 0;
gdjs.PerdisteCode.GDColisionObjects3.length = 0;
gdjs.PerdisteCode.GDSueloObjects1.length = 0;
gdjs.PerdisteCode.GDSueloObjects2.length = 0;
gdjs.PerdisteCode.GDSueloObjects3.length = 0;
gdjs.PerdisteCode.GDTeleportObjects1.length = 0;
gdjs.PerdisteCode.GDTeleportObjects2.length = 0;
gdjs.PerdisteCode.GDTeleportObjects3.length = 0;
gdjs.PerdisteCode.GDCasillaInventarioObjects1.length = 0;
gdjs.PerdisteCode.GDCasillaInventarioObjects2.length = 0;
gdjs.PerdisteCode.GDCasillaInventarioObjects3.length = 0;
gdjs.PerdisteCode.GDMarco_9595InterfazObjects1.length = 0;
gdjs.PerdisteCode.GDMarco_9595InterfazObjects2.length = 0;
gdjs.PerdisteCode.GDMarco_9595InterfazObjects3.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595VidaObjects1.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595VidaObjects2.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595VidaObjects3.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595ScoreObjects1.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595ScoreObjects2.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595ScoreObjects3.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595LlaveObjects1.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595LlaveObjects2.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595LlaveObjects3.length = 0;
gdjs.PerdisteCode.GDTexto_9595VidaObjects1.length = 0;
gdjs.PerdisteCode.GDTexto_9595VidaObjects2.length = 0;
gdjs.PerdisteCode.GDTexto_9595VidaObjects3.length = 0;
gdjs.PerdisteCode.GDTexto_9595ScoreObjects1.length = 0;
gdjs.PerdisteCode.GDTexto_9595ScoreObjects2.length = 0;
gdjs.PerdisteCode.GDTexto_9595ScoreObjects3.length = 0;
gdjs.PerdisteCode.GDPosicion_9595Inicial_9595JugadorObjects1.length = 0;
gdjs.PerdisteCode.GDPosicion_9595Inicial_9595JugadorObjects2.length = 0;
gdjs.PerdisteCode.GDPosicion_9595Inicial_9595JugadorObjects3.length = 0;
gdjs.PerdisteCode.GDllaveObjects1.length = 0;
gdjs.PerdisteCode.GDllaveObjects2.length = 0;
gdjs.PerdisteCode.GDllaveObjects3.length = 0;
gdjs.PerdisteCode.GDPosicion_9595inicial_9595llaveObjects1.length = 0;
gdjs.PerdisteCode.GDPosicion_9595inicial_9595llaveObjects2.length = 0;
gdjs.PerdisteCode.GDPosicion_9595inicial_9595llaveObjects3.length = 0;
gdjs.PerdisteCode.GDPuertaObjects1.length = 0;
gdjs.PerdisteCode.GDPuertaObjects2.length = 0;
gdjs.PerdisteCode.GDPuertaObjects3.length = 0;
gdjs.PerdisteCode.GDJugador1Objects1.length = 0;
gdjs.PerdisteCode.GDJugador1Objects2.length = 0;
gdjs.PerdisteCode.GDJugador1Objects3.length = 0;
gdjs.PerdisteCode.GDPanelPreguntaObjects1.length = 0;
gdjs.PerdisteCode.GDPanelPreguntaObjects2.length = 0;
gdjs.PerdisteCode.GDPanelPreguntaObjects3.length = 0;
gdjs.PerdisteCode.GDTextoPreguntaObjects1.length = 0;
gdjs.PerdisteCode.GDTextoPreguntaObjects2.length = 0;
gdjs.PerdisteCode.GDTextoPreguntaObjects3.length = 0;
gdjs.PerdisteCode.GDTexto2Objects1.length = 0;
gdjs.PerdisteCode.GDTexto2Objects2.length = 0;
gdjs.PerdisteCode.GDTexto2Objects3.length = 0;
gdjs.PerdisteCode.GDBoton1Objects1.length = 0;
gdjs.PerdisteCode.GDBoton1Objects2.length = 0;
gdjs.PerdisteCode.GDBoton1Objects3.length = 0;
gdjs.PerdisteCode.GDBoton2Objects1.length = 0;
gdjs.PerdisteCode.GDBoton2Objects2.length = 0;
gdjs.PerdisteCode.GDBoton2Objects3.length = 0;
gdjs.PerdisteCode.GDTexto3Objects1.length = 0;
gdjs.PerdisteCode.GDTexto3Objects2.length = 0;
gdjs.PerdisteCode.GDTexto3Objects3.length = 0;
gdjs.PerdisteCode.GDBoton3Objects1.length = 0;
gdjs.PerdisteCode.GDBoton3Objects2.length = 0;
gdjs.PerdisteCode.GDBoton3Objects3.length = 0;
gdjs.PerdisteCode.GDTexto1Objects1.length = 0;
gdjs.PerdisteCode.GDTexto1Objects2.length = 0;
gdjs.PerdisteCode.GDTexto1Objects3.length = 0;

gdjs.PerdisteCode.eventsList2(runtimeScene);
gdjs.PerdisteCode.GDTxt_9595perdisteObjects1.length = 0;
gdjs.PerdisteCode.GDTxt_9595perdisteObjects2.length = 0;
gdjs.PerdisteCode.GDTxt_9595perdisteObjects3.length = 0;
gdjs.PerdisteCode.GDColisionObjects1.length = 0;
gdjs.PerdisteCode.GDColisionObjects2.length = 0;
gdjs.PerdisteCode.GDColisionObjects3.length = 0;
gdjs.PerdisteCode.GDSueloObjects1.length = 0;
gdjs.PerdisteCode.GDSueloObjects2.length = 0;
gdjs.PerdisteCode.GDSueloObjects3.length = 0;
gdjs.PerdisteCode.GDTeleportObjects1.length = 0;
gdjs.PerdisteCode.GDTeleportObjects2.length = 0;
gdjs.PerdisteCode.GDTeleportObjects3.length = 0;
gdjs.PerdisteCode.GDCasillaInventarioObjects1.length = 0;
gdjs.PerdisteCode.GDCasillaInventarioObjects2.length = 0;
gdjs.PerdisteCode.GDCasillaInventarioObjects3.length = 0;
gdjs.PerdisteCode.GDMarco_9595InterfazObjects1.length = 0;
gdjs.PerdisteCode.GDMarco_9595InterfazObjects2.length = 0;
gdjs.PerdisteCode.GDMarco_9595InterfazObjects3.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595VidaObjects1.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595VidaObjects2.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595VidaObjects3.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595ScoreObjects1.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595ScoreObjects2.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595ScoreObjects3.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595LlaveObjects1.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595LlaveObjects2.length = 0;
gdjs.PerdisteCode.GDInterfaz_9595LlaveObjects3.length = 0;
gdjs.PerdisteCode.GDTexto_9595VidaObjects1.length = 0;
gdjs.PerdisteCode.GDTexto_9595VidaObjects2.length = 0;
gdjs.PerdisteCode.GDTexto_9595VidaObjects3.length = 0;
gdjs.PerdisteCode.GDTexto_9595ScoreObjects1.length = 0;
gdjs.PerdisteCode.GDTexto_9595ScoreObjects2.length = 0;
gdjs.PerdisteCode.GDTexto_9595ScoreObjects3.length = 0;
gdjs.PerdisteCode.GDPosicion_9595Inicial_9595JugadorObjects1.length = 0;
gdjs.PerdisteCode.GDPosicion_9595Inicial_9595JugadorObjects2.length = 0;
gdjs.PerdisteCode.GDPosicion_9595Inicial_9595JugadorObjects3.length = 0;
gdjs.PerdisteCode.GDllaveObjects1.length = 0;
gdjs.PerdisteCode.GDllaveObjects2.length = 0;
gdjs.PerdisteCode.GDllaveObjects3.length = 0;
gdjs.PerdisteCode.GDPosicion_9595inicial_9595llaveObjects1.length = 0;
gdjs.PerdisteCode.GDPosicion_9595inicial_9595llaveObjects2.length = 0;
gdjs.PerdisteCode.GDPosicion_9595inicial_9595llaveObjects3.length = 0;
gdjs.PerdisteCode.GDPuertaObjects1.length = 0;
gdjs.PerdisteCode.GDPuertaObjects2.length = 0;
gdjs.PerdisteCode.GDPuertaObjects3.length = 0;
gdjs.PerdisteCode.GDJugador1Objects1.length = 0;
gdjs.PerdisteCode.GDJugador1Objects2.length = 0;
gdjs.PerdisteCode.GDJugador1Objects3.length = 0;
gdjs.PerdisteCode.GDPanelPreguntaObjects1.length = 0;
gdjs.PerdisteCode.GDPanelPreguntaObjects2.length = 0;
gdjs.PerdisteCode.GDPanelPreguntaObjects3.length = 0;
gdjs.PerdisteCode.GDTextoPreguntaObjects1.length = 0;
gdjs.PerdisteCode.GDTextoPreguntaObjects2.length = 0;
gdjs.PerdisteCode.GDTextoPreguntaObjects3.length = 0;
gdjs.PerdisteCode.GDTexto2Objects1.length = 0;
gdjs.PerdisteCode.GDTexto2Objects2.length = 0;
gdjs.PerdisteCode.GDTexto2Objects3.length = 0;
gdjs.PerdisteCode.GDBoton1Objects1.length = 0;
gdjs.PerdisteCode.GDBoton1Objects2.length = 0;
gdjs.PerdisteCode.GDBoton1Objects3.length = 0;
gdjs.PerdisteCode.GDBoton2Objects1.length = 0;
gdjs.PerdisteCode.GDBoton2Objects2.length = 0;
gdjs.PerdisteCode.GDBoton2Objects3.length = 0;
gdjs.PerdisteCode.GDTexto3Objects1.length = 0;
gdjs.PerdisteCode.GDTexto3Objects2.length = 0;
gdjs.PerdisteCode.GDTexto3Objects3.length = 0;
gdjs.PerdisteCode.GDBoton3Objects1.length = 0;
gdjs.PerdisteCode.GDBoton3Objects2.length = 0;
gdjs.PerdisteCode.GDBoton3Objects3.length = 0;
gdjs.PerdisteCode.GDTexto1Objects1.length = 0;
gdjs.PerdisteCode.GDTexto1Objects2.length = 0;
gdjs.PerdisteCode.GDTexto1Objects3.length = 0;


return;

}

gdjs['PerdisteCode'] = gdjs.PerdisteCode;
