import React from 'react';
import styles from './styles.module.css'; // Certifique-se de ter seu arquivo CSS importado corretamente

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
    return (
        <div className={styles.navbar}>
            <button
                className={styles.navButton}
            // onClick={() => onChangeOption('Solicitações Clínicas')}
            >
                Solicitações Clínicas
            </button>
            <button
                className={styles.navButton}
            // onClick={() => onChangeOption('Listagem de Solicitações')}
            >
                Listagem de Solicitações
            </button>
        </div>
    );
};

export default Navbar;
