export default class shortcut{
    
    constructor()
    {
        this.shortcutobject={};
    }
    setshortcut(keys)
    {
        this.shortcutobject["keys"]=keys;
        return this.shortcutobject;
    }

}