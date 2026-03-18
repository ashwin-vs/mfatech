import React from "react";

function PrivacyModal({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white max-w-2xl w-full rounded-lg shadow-xl p-8 max-h-[80vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        <h2 className="text-2xl text-yellow-500 font-bold mb-6">
          Privacy Policy
        </h2>

        <p className="text-gray-600 leading-relaxed">
          MFATech respects your privacy and is committed to protecting any
          personal information you share through our website. When you interact
          with our platform—such as submitting inquiries or requesting
          information about our services, training, or technology
          solutions—we may collect basic details like your name, email address,
          phone number, or company information.
        </p>

        <p className="text-gray-600 leading-relaxed mt-4">
          This data is used only to respond to your requests, improve our
          services, and communicate relevant updates. We do not sell or share
          your personal information with third parties except when required by
          law or necessary to provide our services.
        </p>

        <p className="text-gray-600 leading-relaxed mt-4">
          By using this website, you agree to the collection and use of
          information in accordance with this policy.
        </p>

      </div>
    </div>
  );
}

export default PrivacyModal;