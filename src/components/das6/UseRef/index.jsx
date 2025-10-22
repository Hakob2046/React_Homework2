import React, { useRef, useMemo, useCallback } from "react";

const UseRef = () => {
  const emailRef = useRef(null);
  const handleSubmit = useCallback((e) => {
      e.preventDefault();
      const emailValue = emailRef.current.value;
      console.log("Email:", emailValue, emailRef.current);

      // Reset and focus
      emailRef.current.value = "";
      emailRef.current.focus();
    }, []);
  
  //   const forumValidation = useMemo(() => handleSubmit(useRef), [useRef]);
  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} type="email" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default React.memo(UseRef);
