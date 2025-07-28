import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Home, User, FolderGit, Star, Award, Mail } from "lucide-react";

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}) {
  const ref = React.useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-md border-neutral-700 border-2 shadow-lg ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isHovered })
      )}
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) =>
      setIsVisible(latest === 1)
    );
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-2 py-1 text-xs text-white`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center text-gray-300 ${className}`}
    >
      {children}
    </div>
  );
}

const Dock = ({
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  baseItemSize = 50,
}) => {
  const mouseX = useMotionValue(Infinity);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const items = [
    {
      href: "#home",
      label: "Home",
      icon: <Home />,
      onClick: (e) => handleLinkClick(e, "#home"),
    },
    {
      href: "#about",
      label: "About",
      icon: <User />,
      onClick: (e) => handleLinkClick(e, "#about"),
    },
    {
      href: "#portfolio",
      label: "Portfolio",
      icon: <FolderGit />,
      onClick: (e) => handleLinkClick(e, "#portfolio"),
    },
    {
      href: "#awards",
      label: "Awards",
      icon: <Award />,
      onClick: (e) => handleLinkClick(e, "#awards"),
    },
    {
      href: "#contact",
      label: "Contact",
      icon: <Mail />,
      onClick: (e) => handleLinkClick(e, "#contact"),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end h-20 gap-4 rounded-2xl bg-gray-900/50 backdrop-blur-md border border-neutral-700/50 pb-3 px-4 pointer-events-auto"
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </div>
  );
};

export default Dock;
