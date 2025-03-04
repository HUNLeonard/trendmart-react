import { X, Check } from 'lucide-react';
import { useCartContext } from '../../hooks/useCartContext';
import { cn } from '../../utils/cn';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

const CheckoutPopup = memo(() => {
  const { checkout, setCheckout, cart } = useCartContext();
  const [isVisible, setIsVisible] = useState(false);
  const closedOnce = useRef(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setCheckout(false);
      closedOnce.current = true;
    }, 300); // For transition duration
  }, [setCheckout]);

  useEffect(() => {
    if (checkout && !closedOnce.current) {
      // Slight delay for the rendering and transition
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [checkout]);

  useEffect(() => {
    if (!!cart.length) {
      closedOnce.current = false;
    }
  }, [cart]);

  if (!checkout || closedOnce.current) return null;

  return (
    <div
      onClick={handleClose}
      className={cn(
        'fixed top-0 bottom-0 left-0 right-0 bg-black/30 z-50 flex items-center',
        'transition-opacity duration-300 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={cn(
          'relative min-w-64 w-full max-w-md mx-auto',
          'bg-white shadow-2xl rounded-2xl overflow-hidden',
          'transform transition-all duration-300 ease-in-out',
          isVisible
            ? 'scale-100 opacity-100'
            : 'scale-95 opacity-0'
        )}
      >
        <div className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="bg-green-100 rounded-full p-4 inline-block animate-pulse">
              <Check className="text-green-600" size={48} strokeWidth={3} />
            </div>
          </div>
          <h2 className='text-3xl font-bold text-gray-800 mb-2'>
            Checkout Successful!
          </h2>
          <span className='text-gray-600 mb-4 flex items-center justify-center'>
            Your order has been processed successfully.
          </span>
        </div>
        <button
          onClick={handleClose}
          className={cn(
            'absolute top-4 right-4 text-gray-500 hover:text-gray-800',
            'transition-colors duration-200 rounded-full p-2 cursor-pointer',
            'hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300'
          )}
        >
          <X size={24} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
});

export default CheckoutPopup;