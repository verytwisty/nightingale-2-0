/**
 *  NHS Panel Element
 *  @reference: https://nhsuk.github.io/nhsuk-frontend/components/panel/index.html
 *  @author Tony Blacker, NHS Leadership Academy
 *  @version 1.0 22nd July 2019
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const TEMPLATE_OPTIONS = [
        [ 'core/paragraph', { placeholder: 'Panel Text' } ],
          [ 'nhsblocks/nhsbutton', { align: 'right'} ],
];
registerBlockType("nhsblocks/sections", {
  title: __("Section", "nhsblocks"),
  description: __("Sections - these work best on Full Width page layout and will be highlighted white and grey" +
      " alternately as users scroll down a page", "nhsblocks"),
  icon: "editor-kitchensink",
  category: "nhsblocks",

  edit: props => {

    // Lift info from props and populate various constants.
    const {
      attributes: {
        panelTitle
      },
      className,
      setAttributes
    } = props;

    // Grab newPanelTitle, set the value of panelTitle to newPanelTitle.
  const onChangePanelTitle = newPanelTitle => {
    setAttributes({ panelTitle: newPanelTitle });
  };

return (
    <section class="nhsuk-section">
        <div class="nhsuk-width-container">
          <div className="nhsuk-grid-row">
            <InnerBlocks />
          </div>
        </div>
    </section>
);
},
  save: props => {
     // console.info(props);

      const {
      attributes: {
        panelTitle }
    } = props;

    return (
        <section class="nhsuk-section">
          <div class="nhsuk-width-container">
            <div className="nhsuk-grid-row">
                <InnerBlocks.Content />
            </div>
          </div>
        </section>
    );
  }
});

