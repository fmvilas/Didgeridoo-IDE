<?php

/* WebProfilerBundle:Collector:exception.html.twig */
class __TwigTemplate_7a6bf23369ff403fa28ddd9cc8ea2020 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("WebProfilerBundle:Profiler:layout.html.twig");

        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "WebProfilerBundle:Profiler:layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        // line 4
        echo "    <link rel=\"stylesheet\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/framework/css/exception.css"), "html", null, true);
        echo "\" />
    ";
        // line 5
        $this->displayParentBlock("head", $context, $blocks);
        echo "
";
    }

    // line 8
    public function block_menu($context, array $blocks = array())
    {
        // line 9
        echo "<span class=\"label\">
    <span class=\"icon\"><img src=\"";
        // line 10
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/webprofiler/images/profiler/exception.png"), "html", null, true);
        echo "\" alt=\"Exception\" /></span>
    <strong>Exception</strong>
    <span class=\"count\">
        ";
        // line 13
        if ($this->getAttribute($this->getContext($context, "collector"), "hasexception")) {
            // line 14
            echo "            <span>1</span>
        ";
        }
        // line 16
        echo "    </span>
</span>
";
    }

    // line 20
    public function block_panel($context, array $blocks = array())
    {
        // line 21
        echo "    <h2>Exception</h2>

    ";
        // line 23
        if ((!$this->getAttribute($this->getContext($context, "collector"), "hasexception"))) {
            // line 24
            echo "        <p>
            <em>No exception was thrown and uncaught during the request.</em>
        </p>
    ";
        } else {
            // line 28
            echo "        ";
            echo $this->env->getExtension('actions')->renderAction("WebProfilerBundle:Exception:show", array("exception" => $this->getAttribute($this->getContext($context, "collector"), "exception"), "format" => "html"), array());
            // line 29
            echo "    ";
        }
    }

    public function getTemplateName()
    {
        return "WebProfilerBundle:Collector:exception.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  81 => 28,  73 => 23,  56 => 14,  54 => 13,  48 => 10,  45 => 9,  42 => 8,  36 => 5,  332 => 137,  329 => 136,  323 => 135,  321 => 134,  314 => 133,  310 => 132,  306 => 130,  304 => 129,  301 => 128,  298 => 127,  296 => 126,  288 => 124,  286 => 123,  282 => 121,  276 => 117,  238 => 99,  236 => 98,  231 => 95,  229 => 94,  224 => 91,  222 => 90,  217 => 87,  213 => 85,  203 => 81,  201 => 80,  196 => 77,  194 => 76,  189 => 73,  183 => 69,  180 => 68,  177 => 67,  175 => 66,  170 => 63,  161 => 58,  158 => 57,  156 => 56,  145 => 49,  142 => 48,  126 => 39,  123 => 38,  120 => 37,  118 => 36,  114 => 34,  103 => 28,  97 => 26,  92 => 23,  72 => 17,  66 => 20,  52 => 13,  69 => 21,  63 => 10,  58 => 9,  37 => 12,  20 => 1,  139 => 47,  131 => 44,  128 => 43,  121 => 40,  115 => 39,  107 => 36,  99 => 35,  96 => 34,  91 => 33,  87 => 32,  84 => 29,  82 => 20,  75 => 24,  67 => 20,  57 => 15,  50 => 12,  44 => 10,  39 => 8,  33 => 5,  30 => 4,  27 => 6,  271 => 114,  262 => 111,  258 => 110,  255 => 109,  250 => 108,  248 => 107,  235 => 107,  228 => 103,  221 => 99,  214 => 95,  207 => 83,  200 => 87,  185 => 75,  178 => 71,  171 => 67,  164 => 59,  154 => 55,  151 => 53,  143 => 49,  140 => 48,  137 => 46,  132 => 43,  129 => 43,  125 => 42,  119 => 39,  111 => 33,  109 => 36,  106 => 35,  100 => 27,  95 => 30,  89 => 22,  86 => 27,  83 => 26,  80 => 25,  77 => 27,  74 => 21,  71 => 20,  68 => 19,  65 => 18,  60 => 16,  55 => 8,  49 => 6,  46 => 11,  43 => 15,  41 => 9,  38 => 8,  35 => 7,  31 => 4,  28 => 3,);
    }
}
