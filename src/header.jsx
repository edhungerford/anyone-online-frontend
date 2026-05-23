export function Header(){
    return(
        <header>
            <div id="header-wrapper">
                <div id="header-logo">
                    <h1>Is Anyone Online?</h1>
                </div>
                <div id="header-menu-wrapper">
                    <div class="header-menu-left header-menu-group">
                        <div class="header-menu-item" id="header-menu-preferences">Preferences</div>
                        <div class="header-menu-item" id="header-menu-account">Account</div>
                    </div>
                    <div class="header-menu-right header-menu-group">
                        <div id="header-menu-hello">Hello, <span id="header-menu-username">USERNAME</span></div>
                    </div>
                </div>
            </div>
        </header>
    );
}