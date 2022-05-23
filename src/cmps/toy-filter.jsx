

export function ToyFilter({ handleChange, handleChangeTxt, filterBy, onOpenNav, navOpen }) {
    return (
        <section>
            <form onSubmit={() => console.log('now')}>
                <input type="text" name='txt' onChange={handleChangeTxt} />
            </form>
            {/* <div className="drop-down">
                <button onClick={() => onOpenNav()}>☰</button>
                <div onClick={() => handleChange()} name="status" value="all" className={`${(filterBy.status.includes('all') ? 'red' : '')} header-nav ${navOpen}`}>all</div>
                <div onClick={() => handleChange()} name="status" value="funny" className={`${(filterBy.status.includes('funny') ? 'red' : '')} header-nav ${navOpen} `}>funny</div>
                <div onClick={() => handleChange()} name="status" value="action" className={`${(filterBy.status.includes('action') ? 'red' : '')} header-nav ${navOpen}`}>action</div>
                <div onClick={() => handleChange()} name="status" value="battery powered" className={`${(filterBy.status.includes('Battery Powered') ? 'red' : '')} header-nav ${navOpen}`}>Battery Powered</div>
            </div> */}
        </section>
    )
}
