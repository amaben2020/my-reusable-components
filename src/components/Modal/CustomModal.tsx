import React from 'react';
import styles from './../../styles/modal.module.scss';
import FontAwesome from 'react-fontawesome';
const CustomModal = (props: {
  children?: React.ReactNode;
  closeModal?: () => void;
  big?: string;
  small?: string;
}) => {
  const closeicon = () => (
    <FontAwesome
      name="times"
      onClick={closeModal}
      style={{
        color: '#000000',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 0,
        position: 'absolute',
        top: '0.3rem',
        right: '0.5rem',
      }}
    />
  );
  const { closeModal, big, small } = props;
  return (
    <div className={styles.overlay}>
      <div
        className={big ? styles.content : small ? styles.small : styles.content}
      >
        {closeicon()}
        {props.children}
      </div>
    </div>
  );
};

export default CustomModal;
function big(big: any) {
  throw new Error('Function not implemented.');
}
