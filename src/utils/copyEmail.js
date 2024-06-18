export const copyEmail = (copied, setCopied) => {
  if (!copied) {
    const email = document.querySelector(".email").textContent;
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
    });
  }
};
