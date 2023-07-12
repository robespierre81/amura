export default [
  {
    id: 'nanocapital',
    type: 'input',
    data: { 
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/nano.png"  />
            <hr />
            nano<b>.Capital LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 NANO Token
            </div><br />
            <button class="buybutton" type="button" >Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button" onClick={runDetails}>Details</button><br />
            <div class="investcount">
            nano invests in <span class="highlight">1</span>LLCs
            </div>
            </div>
        </>
        )
    },
    style : {
        background: '#0d1116',
        padding: '0',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 100, y: 0 },
  },
  {
    id: 'cryptocapital',
    type: 'input',
    data: { 
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/crypto.png" />
            <hr />
            crypto<b>.Capital LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 CRYP Token
            </div><br />
            <button class="buybutton" type="button">Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button">Details</button><br />
            <div class="investcount">
            crypto invests in <span class="highlight">24</span>LLCs
            </div>
            </div>
        </>
        )
     },
    style : {
        background: '#0d1116',
        padding: '0',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 350, y: 0 },
  },
  {
    id: 'sigmacapital',
    type: 'input',
    data: { 
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/sigma.png" />
            <hr />
            sigma<b>.Capital LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 SIGM Token
            </div><br />
            <button class="buybutton" type="button">Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button">Details</button><br />
            <div class="investcount">
            sigma invests in <span class="highlight">9</span>LLCs
            </div>
            </div>
        </>
        )
     },
    style : {
        padding: '0',
        background: '#0d1116',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 600, y: 0 },
  },
  {
    id: 'alphacapital',
    type: 'input',
    data: {  
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/alpha.png"  />
            <hr />
            alpha<b>.Capital LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 ALPH Token
            </div><br />
            <button class="buybutton" type="button">Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button">Details</button><br />
            <div class="investcount">
            alpha invests in <span class="highlight">1</span>LLCs
            </div>
            </div>
        </>
        )
      },
    style : {
        padding: '0',
        background: '#0d1116',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 850, y: 0 },
  },
  {
    id: 'amuraholding',
    data: { 
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/amura.png"  /><br />
            <hr />
            AMURA<b>.Holding LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 AMHO Token
            </div><br />
            <button class="buybutton" type="button">Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button">Details</button><br />
            <div class="investcount">
            AMURA invests in <span class="highlight">27</span>LLCs
            </div>
            </div>
        </>
        )
      },
    style : {
        padding: '0',
        background: '#0d1116',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 400, y: 500 },
  },
  {
    id: 'ai3crm',
    type: 'output',
    targetPosition: 'left',
    data: {  
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/ai3crm.png" /><br />
            <hr />
            ai3<b>.crm LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 VIVIL Token
            </div><br />
            <button class="buybutton" type="button">Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button">Details</button><br />
            <div class="investcount">
            ai3.crm invests in <span class="highlight">0</span>LLCs
            </div>
            </div>
        </>
        )
     },
    style : {
        padding: '0',
        background: '#0d1116',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 1200, y: 250 },
  },
  {
    id: 'blackboxwork',
    type: 'output',
    targetPosition: 'left',
    data: {  
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/blackboxwork.png"  /><br />
            <hr />
            black.box.work <b>LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 BBWA Token
            </div><br />
            <button class="buybutton" type="button">Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button">Details</button><br />
            <div class="investcount">
            black.box.work invests in <span class="highlight">0</span>LLCs
            </div>
            </div>
        </>
        )
      },
    style : {
        padding: '0',
        background: '#0d1116',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 1200, y: 700 },
  },
  {
    id: 'ai3startups',
    data: {  
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/ai3startups.png"  /><br />
            <hr />
            ai3.startups<b>LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 AI3SU Token
            </div><br />
            <button class="buybutton" type="button">Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button">Details</button><br />
            <div class="investcount">
            ai3.startups invests in <span class="highlight">16</span>LLCs
            </div>
            </div>
        </>
        )
     },
    style : {
        padding: '0',
        background: '#0d1116',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 50, y: 1000 },
  },
  {
    id: 'ai3dev',
    data: {  
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/ai3dev.png"  /><br />
            <hr />
            ai3.dev<b>LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 AI3DEV Token
            </div><br />
            <button class="buybutton" type="button">Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button">Details</button><br />
            <div class="investcount">
            ai3.dev invests in <span class="highlight">26</span>LLCs
            </div>
            </div>
        </>
        )
     },
    style : {
        padding: '0',
        background: '#0d1116',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 300, y: 1000 },
  },
  {
    id: 'veritessa',
    type: 'output',
    data: {  
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/veritessa.png"  /><br />
            <hr />
            Veritessa<b>LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 VIVIL Token
            </div><br />
            <button class="buybutton" type="button">Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button">Details</button><br />
            <div class="investcount">
            veritessa invests in <span class="highlight">0</span>LLCs
            </div>
            </div>
        </>
        )
     },
    style : {
        padding: '0',
        background: '#0d1116',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 550, y: 1000 },
  },
  {
    id: 'viviluxa',
    type: 'output',
    data: { 
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/viviluxa.png"  /><br />
            <hr />
            viviLuxa<b>LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 VIVIL Token
            </div><br />
            <button class="buybutton" type="button">Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button">Details</button><br />
            <div class="investcount">
            viviLuxa invests in <span class="highlight">0</span>LLCs
            </div>
            </div>
        </>
        )
     },
    style : {
        padding: '0',
        background: '#0d1116',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 800, y: 1000 },
  },
  {
    id: 'okietalkie',
    type: 'output',
    data: {  
        label: (
        <>
            <div class="nodeStyle">
            <img src="./images/okietalkie.png"  /><br />
            <hr />
            OkieTalkie<b>LLC</b><br />
            <hr />
            <div class="youownnode">
            You own 0 % of this company
            </div>
            <hr />
            <div class="showtokenbuttons">
            0 OKIE Token
            </div><br />
            <button class="buybutton" type="button">Buy</button>
            <button class="sellbutton" type="button">Sell</button>
            <button class="freezebutton" type="button">Details</button><br />
            <button class="detailsbutton" type="button">Details</button><br />
            <div class="investcount">
            OkieTalkie invests in <span class="highlight">1</span>LLCs
            </div>
            </div>
        </>
        )
      },
    style : {
        padding: '0',
        background: '#0d1116',
        width: 200,
        height: 300,
        border: '1px solid #cccccc',
        fontSize: '14px',
        fontWeight: 900,
        borderRadius: '30px'
    },
    position: { x: 175, y: 1500 },
  },
  
];
