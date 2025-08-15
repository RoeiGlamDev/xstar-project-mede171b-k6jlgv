import { useEffect, useRef } from 'react';

/
 * Custom hook for creating animations for luxury LRP cosmetics website.
 * This hook handles the animation of elements to enhance user experience
 * in a luxury cosmetics shopping environment.
 *
 * @param {string} animationType - The type of animation to apply (e.g., 'fadeIn', 'slideUp').
 * @param {number} duration - The duration of the animation in milliseconds.
 * @returns {object} - Contains ref for the element and a trigger function to start the animation.
 */
export interface AnimationProps {
  animationType: 'fadeIn' | 'slideUp' | 'scaleUp';
  duration: number;
}

export interface AnimationHookReturn {
  ref: React.RefObject<HTMLElement>;
  triggerAnimation: () => void;
}

/
 * Custom hook to handle luxury animations.
 * @param {AnimationProps} props - Properties for the animation.
 * @returns {AnimationHookReturn} - Contains ref and triggerAnimation function.
 */
export const useAnimation = ({ animationType, duration }: AnimationProps): AnimationHookReturn => {
  const ref = useRef<HTMLElement>(null);

  const triggerAnimation = () => {
    if (ref.current) {
      ref.current.style.transition = all ${duration}ms ease-in-out;
      switch (animationType) {
        case 'fadeIn':
          ref.current.style.opacity = '1';
          break;
        case 'slideUp':
          ref.current.style.transform = 'translateY(0)';
          break;
        case 'scaleUp':
          ref.current.style.transform = 'scale(1)';
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = '0';
      ref.current.style.transform = animationType === 'slideUp' ? 'translateY(20px)' : 'scale(0.9)';
    }
  }, [animationType]);

  return { ref, triggerAnimation };
};