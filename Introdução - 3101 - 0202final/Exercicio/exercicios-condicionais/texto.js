let texto = 'O intervalo esta chegando'
alert(`metodos: 
    lengath ${texto.length}
    UpperCase ${texto.toUpperCase()}
    LowerCse ${texto.toLowerCase()}
    IndexOf ${texto.indexOf('esta')}
    Includes ${texto.includes('intervalo')}
    Slice ${texto.slice(0,10)}
    Replace ${texto.replace('esta chegando', 'chegou')}`
    )
