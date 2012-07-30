<?php

/* WebProfilerBundle:Profiler:base.html.twig */
class __TwigTemplate_6022bc739d442b4b3a8da96b807f4661 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'head' => array($this, 'block_head'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\">
    <head>
        <meta charset=\"UTF-8\" />
        <meta name=\"robots\" content=\"noindex,nofollow\" />
        <title>";
        // line 6
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        <link rel=\"icon\" type=\"image/x-icon\" sizes=\"16x16\" href=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/webprofiler/favicon.ico"), "html", null, true);
        echo "\" />
        ";
        // line 8
        $this->displayBlock('head', $context, $blocks);
        // line 12
        echo "    </head>
    <body>
        ";
        // line 14
        $this->displayBlock('body', $context, $blocks);
        // line 15
        echo "    </body>
</html>
";
    }

    // line 6
    public function block_title($context, array $blocks = array())
    {
        echo "Profiler";
    }

    // line 8
    public function block_head($context, array $blocks = array())
    {
        // line 9
        echo "            <link rel=\"stylesheet\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/webprofiler/css/toolbar.css"), "html", null, true);
        echo "\"  />
            <link rel=\"stylesheet\" href=\"";
        // line 10
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/webprofiler/css/profiler.css"), "html", null, true);
        echo "\" />
        ";
    }

    // line 14
    public function block_body($context, array $blocks = array())
    {
        echo "";
    }

    public function getTemplateName()
    {
        return "WebProfilerBundle:Profiler:base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  69 => 14,  63 => 10,  58 => 9,  37 => 12,  20 => 1,  139 => 26,  131 => 44,  128 => 43,  121 => 40,  115 => 39,  107 => 36,  99 => 35,  96 => 34,  91 => 33,  87 => 32,  84 => 31,  82 => 30,  75 => 26,  67 => 20,  57 => 15,  50 => 13,  44 => 10,  39 => 8,  33 => 5,  30 => 4,  27 => 6,  271 => 124,  262 => 121,  258 => 120,  255 => 119,  250 => 118,  248 => 117,  235 => 107,  228 => 103,  221 => 99,  214 => 95,  207 => 91,  200 => 87,  185 => 75,  178 => 71,  171 => 67,  164 => 63,  154 => 55,  151 => 54,  143 => 49,  140 => 48,  137 => 47,  132 => 44,  129 => 43,  125 => 42,  119 => 39,  111 => 37,  109 => 36,  106 => 35,  100 => 32,  95 => 30,  89 => 28,  86 => 27,  83 => 26,  80 => 25,  77 => 27,  74 => 21,  71 => 20,  68 => 19,  65 => 18,  60 => 16,  55 => 8,  49 => 6,  46 => 11,  43 => 15,  41 => 14,  38 => 8,  35 => 8,  31 => 7,  28 => 3,);
    }
}
