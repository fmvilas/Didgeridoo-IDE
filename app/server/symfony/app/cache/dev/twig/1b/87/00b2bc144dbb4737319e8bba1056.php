<?php

/* WebProfilerBundle:Profiler:toolbar_item.html.twig */
class __TwigTemplate_1b8700b2bc144dbb4737319e8bba1056 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        if ($this->getContext($context, "link")) {
            // line 2
            echo "    ";
            ob_start();
            // line 3
            echo "        <a style=\"text-decoration: none; margin: 0; padding: 0;\" href=\"";
            echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("_profiler", array("token" => $this->getContext($context, "token"), "panel" => $this->getContext($context, "name"))), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, $this->getContext($context, "icon"), "html", null, true);
            echo "</a>
    ";
            $context["icon"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        }
        // line 6
        echo "<span style=\"white-space:nowrap; color:#2f2f2f; display:inline-block; min-height:24px; border-right:1px solid #cdcdcd; padding:5px 7px 5px 4px; \">
     ";
        // line 7
        echo twig_escape_filter($this->env, ((array_key_exists("icon", $context)) ? (_twig_default_filter($this->getContext($context, "icon"), "")) : ("")), "html", null, true);
        echo "
     ";
        // line 8
        echo twig_escape_filter($this->env, ((array_key_exists("text", $context)) ? (_twig_default_filter($this->getContext($context, "text"), "")) : ("")), "html", null, true);
        echo "
</span>
";
    }

    public function getTemplateName()
    {
        return "WebProfilerBundle:Profiler:toolbar_item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  19 => 2,  76 => 39,  64 => 35,  22 => 3,  17 => 1,  209 => 84,  205 => 82,  192 => 78,  176 => 70,  165 => 63,  152 => 58,  148 => 57,  141 => 55,  134 => 50,  127 => 46,  93 => 33,  78 => 25,  124 => 41,  88 => 29,  122 => 46,  116 => 42,  108 => 40,  102 => 37,  70 => 20,  51 => 23,  26 => 5,  150 => 43,  135 => 54,  94 => 33,  85 => 28,  61 => 28,  47 => 11,  34 => 7,  157 => 55,  133 => 44,  130 => 48,  113 => 40,  104 => 38,  90 => 32,  79 => 28,  62 => 16,  59 => 15,  32 => 8,  29 => 4,  24 => 3,  81 => 26,  73 => 21,  56 => 14,  54 => 14,  48 => 10,  45 => 9,  42 => 10,  36 => 8,  332 => 137,  329 => 136,  323 => 135,  321 => 134,  314 => 133,  310 => 132,  306 => 130,  304 => 129,  301 => 128,  298 => 127,  296 => 126,  288 => 124,  286 => 123,  282 => 121,  276 => 117,  238 => 99,  236 => 98,  231 => 95,  229 => 94,  224 => 91,  222 => 90,  217 => 87,  213 => 85,  203 => 81,  201 => 80,  196 => 79,  194 => 76,  189 => 77,  183 => 69,  180 => 68,  177 => 67,  175 => 66,  170 => 56,  161 => 61,  158 => 57,  156 => 56,  145 => 56,  142 => 48,  126 => 39,  123 => 44,  120 => 39,  118 => 36,  114 => 34,  103 => 36,  97 => 34,  92 => 37,  72 => 17,  66 => 19,  52 => 12,  69 => 20,  63 => 18,  58 => 16,  37 => 12,  20 => 2,  139 => 47,  131 => 44,  128 => 43,  121 => 40,  115 => 39,  107 => 36,  99 => 34,  96 => 34,  91 => 31,  87 => 28,  84 => 28,  82 => 43,  75 => 24,  67 => 19,  57 => 27,  50 => 12,  44 => 10,  39 => 8,  33 => 7,  30 => 7,  27 => 6,  271 => 114,  262 => 111,  258 => 110,  255 => 109,  250 => 108,  248 => 107,  235 => 107,  228 => 103,  221 => 99,  214 => 95,  207 => 83,  200 => 87,  185 => 76,  178 => 71,  171 => 67,  164 => 59,  154 => 45,  151 => 53,  143 => 49,  140 => 52,  137 => 51,  132 => 49,  129 => 50,  125 => 36,  119 => 34,  111 => 37,  109 => 39,  106 => 35,  100 => 39,  95 => 30,  89 => 29,  86 => 28,  83 => 26,  80 => 26,  77 => 25,  74 => 38,  71 => 37,  68 => 20,  65 => 18,  60 => 16,  55 => 13,  49 => 11,  46 => 10,  43 => 12,  41 => 9,  38 => 8,  35 => 7,  31 => 6,  28 => 3,);
    }
}
