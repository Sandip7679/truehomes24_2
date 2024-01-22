
import React from 'react';

export const Dropdown = ({ classname }) => {
    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={"h-5 w-5 ml-1 text-gray-600 mt-[2px] "+classname}
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>

    );
}

export const SearchIcon = ({ imageClass }) => {
    return (
        <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={imageClass ? imageClass : 'w-5 h-5 absolute left-2 top-7'}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>


    )
}

export const MenuIcon = ({classname}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class={classname ? classname : "w-6 h-6"}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    );
}

export const ArrowRight = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>

    );
}

export const ArrowLeft = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-white ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    );
}
export const LocationIcon = ({ classname }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classname ? classname : "w-6 h-6"}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
    );
}
export const Apartment = ({ classname }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classname ? classname : "w-6 h-6"}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>

    );
}
export const LandArea = ({ classname }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={classname ? classname : "w-6 h-6"} viewBox="0 0 32 40" fill="none" x="0px" y="0px"><path fill-rule="evenodd"
            clip-rule="evenodd" d="M7 7L12.1095 7.02454L12.1028 8.40863L9.37423 8.39552L14.1166 13.1379L13.1379 14.1166L8.39552 9.37423L8.40863 12.1028L7.02454 12.1095L7 7ZM25 7L24.9755 12.1095L23.5914 12.1028L23.6045 9.37423L18.8621 14.1166L17.8834 13.1379L22.6258 8.39552L19.8972 8.40863L19.8905 7.02454L25 7ZM18.8621 17.8834L23.6045 22.6258L23.5914 19.8972L24.9755 19.8905L25 25L19.8905 24.9755L19.8972 23.5914L22.6258 23.6045L17.8834 18.8621L18.8621 17.8834ZM14.1166 18.8621L9.37425 23.6045L12.1029 23.5914L12.1095 24.9755L7.00002 25L7.02457 19.8905L8.40865 19.8972L8.39554 22.6258L13.1379 17.8834L14.1166 18.8621Z" fill="black" />
            <text x="0" y="47" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Éricles Batista</text><text x="0" y="52" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
                from the Noun Project</text></svg>

    );
}
export const Bedroom = ({ classname }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={classname ? classname : "w-6 h-6"} viewBox="0 0 32 40" version="1.1" x="0px" y="0px"><title>bed</title><g class="nc-icon-wrapper" fill="#000000"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3 6.5a1 1 0 0 1 1 1v9h25a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0v-4H4v4a1 1 0 0 1-2 0v-17a1 1 0 0 1 1-1zm4.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm18.5 0a2 2 0 0 1 2 2v3H11v-5h15z" fill="#000000" /></g></g><text x="0" y="47" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Sion</text><text x="0" y="52" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
    );
}
export const LinkIcon = ({ classname }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classname ? classname : "w-6 h-6"}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
    );
}
export const EmailIcon = ({ classname }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={classname ? classname : "w-6 h-6"} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>

    );
}
export const CallIcon = ({ classname }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" class={classname ? classname : "w-6 h-6"} viewBox="0 0 96 120" x="0px" y="0px"><title>call</title><g data-name="1"><path d="M90.14,62.32,84.77,88.67l-2.22.2c-2.62.25-5.88.54-7.9.54C36.72,89.41,5.86,57.06,5.86,17.3a76,76,0,0,1,.43-8l.28-2.69H35.12l5.06,26.75L34.45,40.5c5,8.07,10.71,16.09,18.58,21.09L66.69,52.8Z" /></g><text x="0" y="111" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Zara Alexander</text><text x="0" y="116" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
        </>

    );
}
export const Possession = ({ classname }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={classname ? classname : "w-6 h-6"}
            version="1.1" x="0px" y="0px" viewBox="0 0 64 80" ><g><polygon points="13.2,32.56 14.549,37.28 17.503,34.917 14.71,32.124  " /><polygon points="24.8,32.56 23.29,32.124 20.497,34.917 23.451,37.28  " /><path d="M22,30.586v-1.175C21.073,29.788,20.061,30,19,30s-2.073-0.212-3-0.589v1.175l3,3L22,30.586z" /><polygon points="19,36.281 16.608,38.194 18.414,40 19.586,40 21.392,38.194  " /><path d="M27,22c0,0.339-0.028,0.672-0.069,1H27c1.103,0,2-0.897,2-2s-0.897-2-2-2V22z" /><path d="M11,15h1c1.537,0,2.965-0.762,3.821-2.037l0.936-1.395l0.843,0.631c2.401,1.798,5.376,2.793,8.377,2.801l0.997,0.003L27,16   v1c0.732,0,1.409,0.212,2,0.556v-6.433c0-1.968-1.333-3.676-3.242-4.153l-0.27-0.066l-1.296-1.297C22.512,3.926,20.276,3,17.899,3   C12.992,3,9,6.992,9,11.899v5.657C9.591,17.212,10.268,17,11,17V15z" /><polygon points="18.781,42 17.28,48 20.72,48 19.219,42  " /><path d="M25,16.967c-2.749-0.178-5.438-1.07-7.746-2.57c-1.042,1.37-2.568,2.271-4.254,2.528V22c0,3.309,2.691,6,6,6s6-2.691,6-6   V16.967z" /><path d="M31,44.847l-0.855,0.569C29.611,45.793,28.958,46,28.277,46C26.47,46,25,44.53,25,42.723v-0.537   c0-1.069,0.523-2.073,1.398-2.685l6.483-4.31c-0.454-0.321-0.954-0.575-1.495-0.731l-4.665-1.346l-2.173,7.606l-1.586-1.269   l-1.856,1.856L22.78,48h7.456L31,48.382V44.847z" /><path d="M33,43.517v5.865L38.236,52L33,54.618V61h22V43.517l-11-7.316L33,43.517z M49.168,41.445l1.664,1.109L49.202,45H53v14H35   v-4h2v2h14V47h-3.132l-5.713,8.569l-3.862-3.862l1.414-1.414l2.138,2.138L45.465,47H37v2h-2v-4h11.798L49.168,41.445z" /><polygon points="31,50.618 31,53.382 33.764,52  " /><path d="M60.455,41.14L44,30.201L27.525,41.153C27.203,41.378,27,41.77,27,42.186v0.537C27,43.427,27.573,44,28.277,44   c0.265,0,0.52-0.081,0.737-0.234L44,33.799l14.985,9.967C59.203,43.919,59.458,44,59.723,44C60.427,44,61,43.427,61,42.723v-0.537   C61,41.77,60.797,41.378,60.455,41.14z" /><path d="M9,44h2v4h4.22l1.673-6.693l-1.856-1.856l-1.586,1.269l-2.173-7.605L6.614,34.46C4.486,35.074,3,37.05,3,39.264V51h4.142   C7.413,49.957,8.091,49.087,9,48.556V44z" /><path d="M11,23h0.069C11.028,22.672,11,22.339,11,22v-3c-1.103,0-2,0.897-2,2S9.897,23,11,23z" /><rect x="15" y="50" width="14" height="4" /><path d="M9,52c0,1.103,0.897,2,2,2h2v-4h-2C9.897,50,9,50.897,9,52z" /></g><text x="0" y="79" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Eucalyp</text><text x="0" y="84" fill="#000000"
                font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>

    );
}
export const UserIcon = ({ classname }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classname ? classname : "w-6 h-6"}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    );
}
export const FavouriteIcon = ({ classname }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={"w-6 h-6 " + classname}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>

    );
}

export const CrossIcon = ({ classname }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    );
}

export default Dropdown;


