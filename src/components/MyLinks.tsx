import { BiDownload, BiMobile, BiMoney, BiMoneyWithdraw, BiMoon } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { FaGlobe, FaInternetExplorer, FaMoneyBillAlt } from "react-icons/fa";
import { FcGallery } from "react-icons/fc";
import { GiGalley } from "react-icons/gi";
import { SiInternetcomputer } from "react-icons/si";

export const links = [
  {
    id: 1,
    name: "Everyday Banking",
    submenu: true,
    sublinks: [
      {
        Head: (
          <div className="flex items-center ">
            <BiMoneyWithdraw className="mr-2" /> Deposit
          </div>
        ),
        sublink: [
          {
            name: "Saving, Demand, Non-resident A/c, Fixed time deposit",
            link: "/",
          },
        ],
      },
      {
        Head: (
          <div className="flex items-center ">
            <BsBank className="mr-2" /> Loan
          </div>
        ),
        sublink: [{ name: "Investment, Capital, Micro finance", link: "/" }],
      },

      {
        Head: (
          <div className="flex items-center ">
            <FaGlobe className="mr-2" /> Trade Service
          </div>
        ),
        sublink: [
          { name: "Import, Export, Gurante, Money Transfer Agent", link: "/" },
        ],
      },
      {
        Head: (
          <div className="flex items-center ">
            <BiMoon className="mr-2" /> Cbe Noor
          </div>
        ),
        sublink: [{ name: "Wadiah, Hawala, Mudaharba", link: "/" }],
      },
    ],
  },

  {
    id: 2,
    name: "Ways Of Banking",
    submenu: true,
    sublinks: [
      {
        Head: <div className="flex items-center ">
        <BiMobile className="mr-2" /> Mobile Banking
      </div>,
        sublink: [{ name: "App Downloads", link: "/" }],
      },
      {
        Head: <div className="flex items-center ">
        <BsBank className="mr-2" /> Branch Network
      </div>,
        sublink: [
          {
            name: "Branch List, Pos List, CbeBirr Agent, CbeNoor Branches",
            link: "/",
          },
        ],
      },
      {
        Head: <div className="flex items-center ">
        <FaGlobe className="mr-2" /> Publication
      </div>,
        sublink: [{ name: "Features", link: "/" }],
      },

      {
        Head: <div className="flex items-center ">
            <BiMoney className="mr-2" /> Cbe Birr
          </div>,
        sublink: [{ name: "Features, CbeBirr Agents ", link: "/" }],
      },
      
    ],
  },

  {
    id: 3,
    name: "Media",
    submenu: true,
    sublinks: [
      {
        Head: (
          <div className="flex items-center ">
            <BiMobile className="mr-2" /> Publication
          </div>
        ),
        sublink: [
          { name: "Annual Report, Press Release, Mudaye Neway", link: "/" },
        ],
      },
      {
        Head: (
          <div className="flex items-center ">
            <BsBank className="mr-2" /> Radio & Tv
          </div>
        ),
        sublink: [{ name: "Amharic, Afaan Oromo, Tigregna", link: "/" }],
      },
      {
        Head: (
          <div className="flex items-center ">
            <FaGlobe className="mr-2" /> Downloads
          </div>
        ),
        sublink: [{ name: "Brochers, Fliers, Posters", link: "/" }],
      },

      {
        Head: (
          <div className="flex items-center ">
            <GiGalley className="mr-2" /> Gallery
          </div>
        ),
        sublink: [{ name: "Photo, Video, DownloadsT-shirt", link: "/" }],
      },
    ],
  },

  {
    id: 4,
    name: "Subsidiary Branch",
    submenu: true,
    sublinks: [
      {
        Head: "Djibuti Branch",
        sublink: [{ name: "CBE's Subsideries Branch", link: "/" }],
      },
      {
        Head: "Sudan Branch",
        sublink: [{ name: "CBE's Subsideries Branch", link: "/" }],
      },
      
    ],
  },
];
