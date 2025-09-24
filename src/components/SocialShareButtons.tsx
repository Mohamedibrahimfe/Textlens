    import React from 'react';
    import {
      FacebookShareButton,
      TwitterShareButton,
      LinkedinShareButton,
      WhatsappShareButton,
      FacebookIcon,
      TwitterIcon,
      LinkedinIcon,
      WhatsappIcon,
    } from 'react-share';

    const SocialShareButtons = ({ url, title }) => {
      return (
        <div className="flex space-x-2">
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <LinkedinShareButton url={url} title={title}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      );
    };

    export default SocialShareButtons;