import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import { GiAlienStare } from "react-icons/gi";
import { GiAnglerFish } from "react-icons/gi";
import { GiAndroidMask } from "react-icons/gi";
import { GiBandana } from "react-icons/gi";
import { GiBattleAxe } from "react-icons/gi";
import { GiBeerStein } from "react-icons/gi";
import { GiBoar } from "react-icons/gi";
import { GiBrainFreeze } from "react-icons/gi";
import { GiBrutalHelm } from "react-icons/gi";

export const headerMenus = [
    {
        title: "홍콩 디즈니랜드",
        icon: <GiAlienStare />,
        src: "/search/홍콩 디즈니랜드"
    }, {
        title: "상해 디즈니랜드",
        icon: <GiAnglerFish />,
        src: "/search/상하이 디즈니랜드"
    }, {
        title: "도쿄 디즈니랜드",
        icon: <GiAndroidMask />,
        src: "/search/도쿄 디즈니랜드"
    }, {
        title: "도쿄 디즈니씨",
        icon: <GiBandana />,
        src: "/search/도쿄 디즈니씨"
    }, {
        title: "오사카 유니버셜",
        icon: <GiBattleAxe />,
        src: "/search/오사카 유니버셜 스튜디오"
    }, {
        title: "파리 디즈니랜드",
        icon: <GiBeerStein />,
        src: "/search/파리 디즈니랜드"
    }, {
        title: "베이징 유니버셜",
        icon: <GiBoar />,
        src: "/search/베이징 유니버셜 스튜디오"
    }, {
        title: "싱가포르 유니버셜",
        icon: <GiBrainFreeze />,
        src: "/search/싱가포르 유니버셜 스튜디오"
    }, {
        title: "월트 디즈니 월드",
        icon: <GiBrutalHelm />,
        src: "/search/월트 디즈니 월드"
    }
]

export const searchKeyword = [
    {
        title: "best100",
        src: "/search/다크라이드"
    }, {
        title: "드롭타워",
        src: "/search/드롭타워"
    }, {
        title: "롤러코스터",
        src: "/search/롤러코스터"
    }, {
        title: "유령의집",
        src: "/search/유령의집"
    }, {
        title: "엔테프라이즈",
        src: "/search/엔테프라이즈"
    }, {
        title: "회전목마",
        src: "/search/회전목마"
    }, {
        title: "범퍼카",
        src: "/search/범퍼카"
    }
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    }
]