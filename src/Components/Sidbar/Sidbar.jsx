import { NavLink } from 'react-router-dom';
import s from './Sidbar.module.css'

const Sidbar = () => {
    return (
        <div className={s.blockSidbar}>
            <ul>
                <li className={s.sidbar__items}><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="message_outline_20__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="message_outline_20__message_outline_20"><path id="message_outline_20__Shape" opacity=".4" d="M0 0h20v20H0z"></path><path d="M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22ZM3.24 18.5a1.2 1.2 0 0 1-1.1-1.77A10.77 10.77 0 0 0 3.26 14 7 7 0 0 1 2 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4Z" id="message_outline_20__Icon-Color" fill="currentColor" fill-rule="nonzero"></path></g></g></svg>
                    <NavLink to='/message' className={s.linkSidbar} activeClassName={s.goldActiv}>Message</NavLink></li>

                <li className={s.sidbar__items}><svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M6.84 16.44c.76.06 1.74.06 3.16.06 1.42 0 2.4 0 3.16-.06a3.75 3.75 0 0 0 1.43-.32 3.5 3.5 0 0 0 1.53-1.53c.15-.29.26-.69.32-1.43l.03-.63-1.3-1.3c-.3-.3-.5-.5-.67-.64a.86.86 0 0 0-.27-.18.75.75 0 0 0-.46 0 .86.86 0 0 0-.27.18c-.16.13-.36.33-.67.64l-2.3 2.3a.75.75 0 0 1-1.06 0l-.3-.3c-.3-.3-.5-.5-.67-.64a.86.86 0 0 0-.27-.18.75.75 0 0 0-.46 0 .86.86 0 0 0-.27.18c-.16.13-.36.33-.67.64L4.56 15.5c.25.24.53.45.85.6.29.16.69.27 1.43.33zm9.39-6.27.27.27V10c0-1.42 0-2.4-.06-3.16a3.75 3.75 0 0 0-.32-1.43 3.5 3.5 0 0 0-1.53-1.53 3.75 3.75 0 0 0-1.43-.32A43.2 43.2 0 0 0 10 3.5c-1.42 0-2.4 0-3.16.06-.74.06-1.14.17-1.43.32a3.5 3.5 0 0 0-1.53 1.53c-.15.29-.26.69-.32 1.43A43.2 43.2 0 0 0 3.5 10c0 1.42 0 2.4.06 3.16.04.47.1.8.17 1.05l2.04-2.04.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.16.14.34.3.53.5l1.77-1.77.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7zM2.54 4.73C2 5.8 2 7.2 2 10c0 2.8 0 4.2.54 5.27a5 5 0 0 0 2.19 2.19C5.8 18 7.2 18 10 18c2.8 0 4.2 0 5.27-.54a5 5 0 0 0 2.19-2.19C18 14.2 18 12.8 18 10c0-2.8 0-4.2-.55-5.27a5 5 0 0 0-2.18-2.19C14.2 2 12.8 2 10 2c-2.8 0-4.2 0-5.27.54a5 5 0 0 0-2.19 2.19zM7.25 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" fill="currentColor" fill-rule="evenodd"></path></svg>
                    <NavLink to='/pages' className={s.linkSidbar} activeClassName={s.goldActiv}>Posts</NavLink></li>

                <li className={s.sidbar__items}><svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M5.5 11a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75v-1A.75.75 0 0 1 5.5 11Zm3.75-.25a.75.75 0 0 0-1.5 0v2.75a.75.75 0 0 0 1.5 0v-2.75ZM14.5 10a.75.75 0 0 1 .75.76v2.8a.75.75 0 0 1-1.5-.01v-2.8a.75.75 0 0 1 .75-.75Zm-2.25-.74a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z"></path><path fill="currentColor" fill-rule="evenodd" d="M7.92 2c-.88 0-1.6 0-2.17.05a4.1 4.1 0 0 0-1.57.39 4 4 0 0 0-1.74 1.74 4.1 4.1 0 0 0-.4 1.57C2 6.33 2 7.04 2 7.92v4.16c0 .88 0 1.6.05 2.17.04.58.15 1.1.39 1.57a4 4 0 0 0 1.74 1.74c.48.24.99.35 1.57.4.58.04 1.29.04 2.17.04h4.16c.88 0 1.6 0 2.17-.05a4.1 4.1 0 0 0 1.57-.39 4 4 0 0 0 1.74-1.74c.24-.47.35-.99.4-1.57.04-.58.04-1.29.04-2.17V7.92c0-.88 0-1.6-.05-2.17a4.1 4.1 0 0 0-.39-1.57 4 4 0 0 0-1.74-1.74 4.1 4.1 0 0 0-1.57-.4C13.67 2 12.96 2 12.08 2H7.92ZM4.87 3.77c.22-.11.51-.19 1-.23.51-.04 1.16-.04 2.08-.04h4.1c.92 0 1.57 0 2.07.04.5.04.8.12 1.02.23a2.5 2.5 0 0 1 1.09 1.1c.11.22.19.51.23 1 .03.42.04.93.04 1.6-.38-.28-.85-.6-1.35-.9-1.04-.65-2.4-1.32-3.65-1.32-1.43 0-2.53.64-3.54 1.23l-.42.25A8.5 8.5 0 0 1 3.5 7.99v-.04c0-.92 0-1.57.04-2.07.04-.5.12-.8.23-1.01a2.5 2.5 0 0 1 1.1-1.1ZM3.5 9.5v2.55c0 .92 0 1.57.04 2.07.04.5.12.8.23 1.02a2.5 2.5 0 0 0 1.1 1.09c.22.11.51.19 1 .23.51.04 1.16.04 2.08.04h4.1c.92 0 1.57 0 2.07-.04.5-.04.8-.12 1.02-.23a2.5 2.5 0 0 0 1.09-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08V9.36a30.58 30.58 0 0 1-.17-.13c-.43-.33-1.14-.88-1.96-1.39a6.19 6.19 0 0 0-2.87-1.09c-1 0-1.73.42-2.77 1.02a70.79 70.79 0 0 1-.45.26A9.97 9.97 0 0 1 3.5 9.5Z" clip-rule="evenodd"></path></svg>
                    <NavLink to='/music' className={s.linkSidbar} activeClassName={s.goldActiv}>Music</NavLink></li>

                <li className={s.sidbar__items}><svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.84 2H8.16c-.93 0-1.67 0-2.26.05-.62.05-1.15.15-1.63.4a4.15 4.15 0 0 0-1.82 1.82 4.26 4.26 0 0 0-.4 1.63C2 6.5 2 7.23 2 8.16v3.68c0 .93 0 1.67.05 2.26.05.62.15 1.15.4 1.63.4.78 1.04 1.42 1.82 1.82.48.25 1.01.35 1.63.4.6.05 1.33.05 2.26.05h3.68c.93 0 1.67 0 2.26-.05a4.26 4.26 0 0 0 1.63-.4 4.15 4.15 0 0 0 1.82-1.82c.25-.48.35-1.01.4-1.63.05-.6.05-1.33.05-2.26V8.16c0-.93 0-1.67-.05-2.26a4.26 4.26 0 0 0-.4-1.63 4.15 4.15 0 0 0-1.82-1.82 4.26 4.26 0 0 0-1.63-.4C13.5 2 12.77 2 11.84 2zm-6.9 1.79c.25-.12.56-.2 1.08-.25.53-.04 1.2-.04 2.17-.04h3.62c.96 0 1.64 0 2.17.04.52.05.83.13 1.07.25.5.25.9.66 1.16 1.16.12.24.2.55.25 1.07l.02.48H3.52l.02-.48c.05-.52.13-.83.25-1.07.25-.5.66-.9 1.16-1.16zM3.5 8v3.81c0 .96 0 1.64.04 2.17.05.52.13.83.25 1.07.25.5.66.9 1.16 1.16.24.12.55.2 1.07.25.53.04 1.2.04 2.17.04h3.62c.96 0 1.64 0 2.17-.04a2.8 2.8 0 0 0 1.07-.25c.5-.25.9-.66 1.16-1.16.12-.24.2-.55.25-1.07.04-.53.04-1.2.04-2.17V8z" fill="currentColor" fill-rule="evenodd"></path></svg>
                    <NavLink to='/new' className={s.linkSidbar} activeClassName={s.goldActiv}>New</NavLink></li>

                <li className={s.sidbar__items}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="m7.22 3.38.01-.03a4.15 4.15 0 0 1 .17-.48c.36-.82.95-1.29 1.86-1.36l.16-.01h1.21c1.05.03 1.74.6 2.1 1.7l.05.18.05.16c.01.07.03.14.06.2l.05.14.03.02.06-.02.11-.04.14-.06a5.36 5.36 0 0 1 .17-.08l.03-.01a4.23 4.23 0 0 1 .43-.15c.93-.27 1.68-.08 2.32.61l.1.13.72.88c.63.83.61 1.72 0 2.68l-.12.16-.1.14-.12.18-.06.1-.03.05v.02l.08.05.11.06.13.08c1.21.61 1.71 1.42 1.52 2.54l-.03.16-.22.92c-.13.59-.24.87-.67 1.25a2.13 2.13 0 0 1-1.05.52h-.01a3.92 3.92 0 0 1-.44.06l-.2.02H15.63l-.16.01-.16.02.01.13.01.08.03.15c.07.32.1.62.1.9a2.04 2.04 0 0 1-1.13 1.87l-.15.08-1.02.5c-.9.4-1.72.23-2.48-.47a3.93 3.93 0 0 1-.15-.14l-.13-.14-.11-.13a2.94 2.94 0 0 0-.15-.17l-.09-.08-.04-.04-.08.08-.09.1-.1.1c-.83.99-1.7 1.34-2.77.93l-.15-.06-.91-.45-.28-.13a1.78 1.78 0 0 1-.87-.92 2.15 2.15 0 0 1-.2-1.01v-.02c0-.19.02-.39.06-.6l.04-.2.04-.2.01-.15-.1-.02-.12-.01h-.15a4.14 4.14 0 0 1-.86-.1h-.01a2.05 2.05 0 0 1-1.61-1.53l-.05-.16-.25-1.1c-.2-1.03.2-1.82 1.19-2.41l.17-.1.15-.08.19-.1.13-.1v-.01l-.05-.1-.07-.1-.09-.13a5.2 5.2 0 0 1-.29-.42c-.54-.9-.53-1.72.05-2.52l.1-.14.72-.87c.68-.8 1.56-.96 2.64-.56l.18.08.16.07a2.9 2.9 0 0 0 .19.08l.12.04.03-.02.03-.07.04-.12.04-.15.04-.16Zm4.24.84.01.04.05.14a1.5 1.5 0 0 0 .75.83l.03.01a1.5 1.5 0 0 0 1.13.08l.06-.02a1.47 1.47 0 0 0 .07-.02l.12-.04.06-.03.13-.06.04-.01a2.7 2.7 0 0 1 .41-.16c.27-.08.41-.06.47-.04.06.01.16.05.32.22l.07.09.69.84c.13.18.15.29.15.35 0 .09-.03.27-.23.58l-.08.12-.08.1a4.4 4.4 0 0 0-.18.27l-.02.02-.06.1v.01l-.01.02-.03.05a1.5 1.5 0 0 0-.18 1.06v.01a1.5 1.5 0 0 0 .65.96l.08.05.05.04.1.06.07.03.13.08.04.01c.45.24.62.43.67.52.04.06.09.16.04.42l-.02.12-.2.89c-.07.28-.1.35-.11.37h-.01a.97.97 0 0 1-.1.11.65.65 0 0 1-.36.16 2.36 2.36 0 0 1-.25.04h-.16l-.13.01h-.08a4.55 4.55 0 0 0-.28.02l-.15.02a1.5 1.5 0 0 0-1.32 1.63l.01.12v.07l.02.09.01.06.03.15v.05c.06.23.07.42.07.55 0 .2-.04.3-.07.35a.72.72 0 0 1-.28.24l-.1.05-.98.47c-.2.1-.32.09-.38.07-.08-.01-.23-.06-.46-.28a2.38 2.38 0 0 1-.08-.07l-.1-.1-.09-.11a4.39 4.39 0 0 0-.21-.24l-.02-.01-.08-.09a1.43 1.43 0 0 0-.04-.03l-.04-.04a1.5 1.5 0 0 0-2.05.01l-.08.08a1.43 1.43 0 0 0-.04.04l-.1.1a1.53 1.53 0 0 0-.04.04l-.1.12-.03.03c-.31.37-.53.5-.64.53-.08.03-.19.05-.42-.03l-.1-.04-.86-.42-.24-.12a1.19 1.19 0 0 1-.13-.08v-.01a1.08 1.08 0 0 1-.09-.15.67.67 0 0 1-.06-.34l.04-.36.04-.18a4.38 4.38 0 0 0 .06-.35l.01-.15a1.5 1.5 0 0 0-.43-1.22 1.5 1.5 0 0 0-.86-.43h-.1a1.4 1.4 0 0 0-.06-.02h-.13a1.54 1.54 0 0 0-.06-.01h-.19a2.66 2.66 0 0 1-.55-.07c-.22-.05-.3-.11-.35-.15a.7.7 0 0 1-.17-.32L3.26 12l-.24-1.05c-.04-.22 0-.33.02-.38.04-.08.15-.23.46-.42l.13-.08.12-.06a4.43 4.43 0 0 0 .31-.18l.14-.09a1.5 1.5 0 0 0 .65-.94v-.02a1.5 1.5 0 0 0-.17-1.07l-.05-.09a1.49 1.49 0 0 0-.04-.06l-.07-.11a1.5 1.5 0 0 0-.04-.06l-.09-.12a1.52 1.52 0 0 0-.02-.03c-.31-.4-.37-.65-.38-.76 0-.06 0-.18.15-.4L4.2 6l.68-.83c.16-.18.27-.21.33-.23.1-.02.28-.03.63.1l.13.06.13.05a4.42 4.42 0 0 0 .31.13l.12.04a1.5 1.5 0 0 0 1.14-.05l.03-.02a1.5 1.5 0 0 0 .76-.82l.03-.08.02-.07.04-.12.02-.06.04-.14.01-.04.03-.12.12-.32c.1-.23.19-.32.24-.36.04-.03.13-.09.34-.1l.1-.01h1.14c.24.01.34.07.39.11.07.06.2.2.3.54l.05.14.03.13.1.3ZM10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"></path></svg>
                    <NavLink to='/setting' className={s.linkSidbar} activeClassName={s.goldActiv}>Setting</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidbar;