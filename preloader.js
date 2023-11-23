<style>
    /* Keyframes for rotation */
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    /* Style for the loader */
    #loader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        z-index: 999;
    }

    #svgImage {
        max-width: 100px;
        max-height: 100px;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        animation: rotate 4s linear infinite;
    }

    /* Style for the content */
    #content {
        display: none;
        text-align: center;
        padding: 20px;
    }
</style>
<script>
    function hideLoader() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }
    
    // Wait for the DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', hideLoader);

    // Wait for the window load event as backup
    window.addEventListener('load', hideLoader);
    
</script>
