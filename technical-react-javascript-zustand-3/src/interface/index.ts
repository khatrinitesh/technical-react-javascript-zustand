export interface BannerProps{
import Accordion from './../components/Accordion';
    bannerTitle:string;
    bannerDescription:string;
    bannerStyle:React.CSSProperties;
}

export interface TopNavProps{
    title:string;
    pathname:string;
}

export interface AccordionState {
    openItem:number | null; // track which item is open, null means none are open
    toggleItem:(index:number) => void;
}

export interface AccordionItemProps{
    index:number;
    title:stiring;
    children:React.ReactNode;
}


export interface AlertState{
    isVisible:boolean;
    message:string;
    showAlert:(message:string) => void;
    hideAlert:() => void;
}

export interface IconState {
    isActive:boolean;
    toggleIcon:() => void;
}

export interface SearchState{
    isSearchOpen:boolean;
    query:string;
    togglesearch:() => void;
    setQuery:(query:string) => void;
}

export interface ArrowState {
    isToggled:boolean; // State to check if the arrow is toggled or not
    toggleArrow:() => void;
}

export interface AutocompleteState{
    query:string;
    setQuery:(query:string) => void;
    suggestions:string;
    setSuggestions:(suggestions:string[]) => void;
}

export interface AvatarStore{
    avatars:string[];
    addAvatar:(avatar:string) => void;
    removeAvatar:(avatar:string) => void;
}

export interface ColorStore{
    backgroundColor:string;
    setBackgroundColor:(color:string) => void;
}

export interface TextStore{
    text:string;
    setText:(text:string) => void;
}

export interface CheckboxStore{
    checked:boolean; // whether the checkbox is checked
    toggleChecked:() => void;  //function to toggle the checkbox state
}

export interface PostProps{
    id:number;
    title:string;
    body:string;
}