import LaptopIcon from "../../../assets/laptop-svgrepo-com.svg";
import PhoneIcon from "../../../assets/phone-svgrepo-com.svg";
import CameraIcon from "../../../assets/camera-svgrepo-com.svg";
import MarketingIcon from "../../../assets/marketing-svgrepo-com.svg";
import AnalyticsIcon from "../../../assets/analytics-svgrepo-com.svg";

const navItems = [
    { label: "management", icon: LaptopIcon, pageNum: 0 },
    { label: "content", icon: CameraIcon, pageNum: 1 },
    { label: "social media", icon: PhoneIcon, pageNum: 2 },
    { label: "marketing", icon: MarketingIcon, pageNum: 3 },
    { label: "analytics", icon: AnalyticsIcon, pageNum: 4 },
];
const ContentSelection = ({ setActivePage }) => {
    return (
        <div className="services-nav-wrapper">
            <nav className="services-nav">
                {navItems.map((item) => (
                    <button type="button" onClick={() => setActivePage(item.pageNum)}>
                        <img src={item.icon} alt={item.label} />
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default ContentSelection;
