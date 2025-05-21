import robo1 from '../../images/robo-1.jpeg';
import robo2 from '../../images/robo-2.jpeg';
import ggg from '../../images/GGG.jpeg';
import gggDesign from '../../images/GGG DESIGN - .png';
import bottle from '../../images/bottle.png';

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  link?: string;
}

const projectsData: Project[] = [
  {
    id: "robotic-arm",
    title: "Dual Mode Robotic Arm",
    description: "Manual + autonomous robotic arm for precision tasks; demoed live at tech fairs. Implemented both manual control and computer vision for autonomous operation.",
    images: [robo1, robo2],
    link: "https://dual-mode-robotic-arm.netlify.app/"
  },
  {
    id: "green-guardian",
    title: "Green Guardian GO",
    description: "AI-based RVM system with plastic detection, reward mechanism, and mobile integration. Developed for sustainable waste management and recycling incentivization.",
    images: [ggg, gggDesign],
    link: "https://green-guardian-go.netlify.app/"
  },
  {
    id: "attendance-system",
    title: "Smart Attendance System",
    description: "Facial recognition attendance system using MongoDB, OpenCV; scalable for schools. Implemented real-time facial detection and database integration for record keeping.",
    images: ["https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    link: "#"
  },
  {
    id: "stair-bottle",
    title: "Stair Water Bottle",
    description: "Ergonomic bottle patented for stair users; recognized in innovation contests. Designed a unique bottle shape that accommodates placement on stairs without tipping.",
    images: [bottle, bottle],
    link: "https://stair-water-bottle.netlify.app/"
  }
];

export default projectsData;