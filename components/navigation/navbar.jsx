import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="#" target={"_blank"}>
				<img
					className={styles.tokenscope_logo}
					src="/tokenScope_logo.png"
				></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
