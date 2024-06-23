import { IpcMainInvokeEvent, dialog } from "electron"
import { ipcMain } from "electron"
import { getWindowByName } from "./windows"
import { config } from "./db/query"
const { app, globalShortcut } = require('electron')

ipcMain.handle("shortCut", (_event: IpcMainInvokeEvent, shortCut: string) => {
  // react 严格模式会执行两次，可能会导致快捷键重复注册，这里在注册前会删除旧快捷键
  return registerSearchShortCut(shortCut)
  
})


function registerSearchShortCut(shortCut: string){
  globalShortcut.unregisterAll()

  // const ret = findOne(`select * from config where id=1`) as {content: string}
  // const shortCut = JSON.parse(ret.content).shortCut as string
  if (shortCut && globalShortcut.isRegistered(shortCut)){
    dialog.showErrorBox('提示', '快捷键注册失败，请更换')
    return false
  }

  const win = getWindowByName('search')
  const res =  globalShortcut.register(shortCut, () => {
    win.isVisible() ? win.hide() : win.show()
  })
  return res
}
app.on('will-quit', () => {
  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})

export const registerAppGlobShortCut =()=>{
  const configData = config() as {shortCut: string}
  registerSearchShortCut(configData.shortCut)
}