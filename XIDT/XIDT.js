
function init_user( TUID )
{

// start new session for Chris
S.push({})
F("now now: prop: pbk exkey: prop: pvk expvk: prop: I_AM " + TUID " prop:")

// store in localStorage first before sending
C0=S[ S.length - 1 ]
localStorage.setItem(TUID, JSON.stringify(C0))

// remove private key before sending
const removePropery = (propKey, { [propKey]: propValue, ...rest }) => rest;
C = removePropery('pvk', C0)

S.push(C)
F("je: wss:")

}

function restore_keys(TUID)
{
S.push( JSON.parse(localStorage.getItem( TUID )) );
F("pbk ix: imkey: pvk ix: imkey:");
}
