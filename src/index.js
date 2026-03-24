import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType('codetrappers/gutenberg-block-starter', {
  edit() {
    const blockProps = useBlockProps();

    return <div {...blockProps}>Codetrappers block starter</div>;
  },
  save() {
    const blockProps = useBlockProps.save();

    return <div {...blockProps}>Codetrappers block starter</div>;
  },
});
