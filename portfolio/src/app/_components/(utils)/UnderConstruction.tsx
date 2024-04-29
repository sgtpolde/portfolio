'use client';
import { motion } from 'framer-motion';
import { ChangeEvent, FormEvent, useState, useRef } from 'react';

// Type definitions for clarity
interface FormInputEvent extends ChangeEvent<HTMLInputElement> {}
interface FormSubmitEvent extends FormEvent<HTMLFormElement> {}
interface EmailSubscriptionFormProps {
  email: string;
  onEmailChange: (event: FormInputEvent) => void;
  onSubmit: (event: FormSubmitEvent) => void;
}

// Main component encapsulating the "Under Construction" page
const UnderConstruction = () => {
  const [email, setEmail] = useState<string>('');
  const [modalOpen, setModalOpen] = useState(false);

  // Handlers for email change and form submission
  const handleEmailChange = (event: FormInputEvent) =>
    setEmail(event.target.value);

  const handleSubmit = (event: FormSubmitEvent) => {
    event.preventDefault();
    setModalOpen(true); // Open the modal on form submit
  };

  // Close modal handler
  const closeModal = () => setModalOpen(false);

  return (
    <div className='animated-background flex flex-col items-center justify-center min-h-screen text-white p-4'>
      <AnimatedIcon />
      <AnimatedTitle />
      <AnimatedMessage />
      <EmailSubscriptionForm
        email={email}
        onEmailChange={handleEmailChange}
        onSubmit={handleSubmit}
      />
      {modalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Imagine!</h3>
            <p className="py-4">If, nothing happened.</p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

// Components for various animated elements
const AnimatedIcon = () => (
  <motion.div
    initial={{ scale: 0.5 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className='text-6xl md:text-8xl font-bold text-primary'
  >
    🚧
  </motion.div>
);

const AnimatedTitle = () => (
  <motion.h1
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className='mt-5 text-4xl md:text-6xl text-center leading-tight text-primary-content'
  >
    We&apos;re building something great!
  </motion.h1>
);

const AnimatedMessage = () => (
  <motion.p
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.4 }}
    className='text-lg md:text-xl mt-2 text-center text-primary-content'
  >
    Stay tuned for updates.
  </motion.p>
);

// Email subscription form component using DaisyUI components
const EmailSubscriptionForm: React.FC<EmailSubscriptionFormProps> = ({
  email,
  onEmailChange,
  onSubmit,
}) => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={onSubmit}
      className='mt-4 w-full max-w-md'
    >
      <input
        type='email'
        aria-label='Email Address'
        placeholder='Your Email Address'
        onChange={onEmailChange}
        value={email}
        required
        className='input input-bordered w-full'
      />
      <button
        type='submit'
        className='btn btn-primary mt-4 w-full'
      >
        Subscribe for Updates
      </button>
    </motion.form>
  );
};

export default UnderConstruction;
