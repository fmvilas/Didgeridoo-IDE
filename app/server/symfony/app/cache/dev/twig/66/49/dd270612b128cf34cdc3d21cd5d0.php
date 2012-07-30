<?php

/* DoctrineBundle:Collector:db.html.twig */
class __TwigTemplate_6649dd270612b128cf34cdc3d21cd5d0 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("WebProfilerBundle:Profiler:layout.html.twig");

        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
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
    public function block_toolbar($context, array $blocks = array())
    {
        // line 4
        echo "    ";
        $context["icon"] = ('' === $tmp = "        <img width=\"20\" height=\"28\" alt=\"Database\" style=\"border-width: 0; vertical-align: middle; margin-right: 5px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQRJREFUeNpi/P//PwM1ARMDlcGogZQDlpMnT7pxc3NbA9nhQKxOpL5rQLwJiPeBsI6Ozl+YBOOOHTv+AOllQNwtLS39F2owKYZ/gRq8G4i3ggxEToggWzvc3d2Pk+1lNL4fFAs6ODi8JzdS7mMRVyDVoAMHDsANdAPiOCC+jCQvQKqBQB/BDbwBxK5AHA3E/kB8nKJkA8TMQBwLxaBIKQbi70AvTADSBiSadwFXpCikpKQU8PDwkGTaly9fHFigkaKIJid4584dkiMFFI6jkTJII0WVmpHCAixZQEXWYhDeuXMnyLsVlEQKI45qFBQZ8eRECi4DBaAlDqle/8A48ip6gAADANdQY88Uc0oGAAAAAElFTkSuQmCC\"/>
    ") ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 7
        echo "    ";
        ob_start();
        // line 8
        echo "        <span title=\"";
        echo twig_escape_filter($this->env, sprintf("%0.2f", ($this->getAttribute($this->getContext($context, "collector"), "time") * 1000)), "html", null, true);
        echo " ms\">";
        echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "collector"), "querycount"), "html", null, true);
        echo "</span>
    ";
        $context["text"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 10
        echo "    ";
        $this->env->loadTemplate("WebProfilerBundle:Profiler:toolbar_item.html.twig")->display(array_merge($context, array("link" => $this->getContext($context, "profiler_url"))));
    }

    // line 13
    public function block_menu($context, array $blocks = array())
    {
        // line 14
        echo "<span class=\"label\">
    <span class=\"icon\"><img src=\"";
        // line 15
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/webprofiler/images/profiler/db.png"), "html", null, true);
        echo "\" alt=\"\" /></span>
    <strong>Doctrine</strong>
    <span class=\"count\">
        <span>";
        // line 18
        echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "collector"), "querycount"), "html", null, true);
        echo "</span>
        <span>";
        // line 19
        echo twig_escape_filter($this->env, sprintf("%0.0f", ($this->getAttribute($this->getContext($context, "collector"), "time") * 1000)), "html", null, true);
        echo " ms</span>
    </span>
</span>
";
    }

    // line 24
    public function block_panel($context, array $blocks = array())
    {
        // line 25
        echo "    <h2>Queries</h2>

    ";
        // line 27
        if ((!$this->getAttribute($this->getContext($context, "collector"), "querycount"))) {
            // line 28
            echo "        <p>
            <em>No queries.</em>
        </p>
    ";
        } else {
            // line 32
            echo "        <ul class=\"alt\">
            ";
            // line 33
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getContext($context, "collector"), "queries"));
            foreach ($context['_seq'] as $context["i"] => $context["query"]) {
                // line 34
                echo "                <li class=\"";
                echo ((($this->getContext($context, "i") % 2 == 1)) ? ("odd") : ("even"));
                echo "\">
                    <div>
                        <code>";
                // line 36
                echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "query"), "sql"), "html", null, true);
                echo "</code>
                    </div>
                    <small>
                        <strong>Parameters</strong>: ";
                // line 39
                echo twig_escape_filter($this->env, $this->env->getExtension('yaml')->encode($this->getAttribute($this->getContext($context, "query"), "params")), "html", null, true);
                echo "<br />
                        <strong>Time</strong>: ";
                // line 40
                echo twig_escape_filter($this->env, sprintf("%0.2f", ($this->getAttribute($this->getContext($context, "query"), "executionMS") * 1000)), "html", null, true);
                echo " ms
                    </small>
                </li>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['i'], $context['query'], $context['_parent'], $context['loop']);
            $context = array_merge($_parent, array_intersect_key($context, $_parent));
            // line 44
            echo "        </ul>
    ";
        }
        // line 46
        echo "
    <h2>Database Connections</h2>

    ";
        // line 49
        if ($this->getAttribute($this->getContext($context, "collector"), "connections")) {
            // line 50
            echo "        <table>
            <tr>
                <th>Name</th>
                <th>Service</th>
            </tr>
            ";
            // line 55
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getContext($context, "collector"), "connections"));
            foreach ($context['_seq'] as $context["name"] => $context["service"]) {
                // line 56
                echo "                <tr>
                    <th>";
                // line 57
                echo twig_escape_filter($this->env, $this->getContext($context, "name"), "html", null, true);
                echo "</th>
                    <td>";
                // line 58
                echo twig_escape_filter($this->env, $this->getContext($context, "service"), "html", null, true);
                echo "</td>
                </tr>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['name'], $context['service'], $context['_parent'], $context['loop']);
            $context = array_merge($_parent, array_intersect_key($context, $_parent));
            // line 61
            echo "        </table>
    ";
        } else {
            // line 63
            echo "        <p>
            <em>No entity managers.</em>
        </p>
    ";
        }
        // line 67
        echo "
    <h2>Entity Managers</h2>

    ";
        // line 70
        if ($this->getAttribute($this->getContext($context, "collector"), "managers")) {
            // line 71
            echo "        <table>
            <tr>
                <th>Name</th>
                <th>Service</th>
            </tr>
            ";
            // line 76
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getContext($context, "collector"), "managers"));
            foreach ($context['_seq'] as $context["name"] => $context["service"]) {
                // line 77
                echo "                <tr>
                    <th>";
                // line 78
                echo twig_escape_filter($this->env, $this->getContext($context, "name"), "html", null, true);
                echo "</th>
                    <td>";
                // line 79
                echo twig_escape_filter($this->env, $this->getContext($context, "service"), "html", null, true);
                echo "</td>
                </tr>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['name'], $context['service'], $context['_parent'], $context['loop']);
            $context = array_merge($_parent, array_intersect_key($context, $_parent));
            // line 82
            echo "        </table>
    ";
        } else {
            // line 84
            echo "        <p>
            <em>No entity managers.</em>
        </p>
    ";
        }
    }

    public function getTemplateName()
    {
        return "DoctrineBundle:Collector:db.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  209 => 84,  205 => 82,  192 => 78,  176 => 70,  165 => 63,  152 => 58,  148 => 57,  141 => 55,  134 => 50,  127 => 46,  93 => 33,  78 => 25,  124 => 41,  88 => 29,  122 => 46,  116 => 42,  108 => 40,  102 => 37,  70 => 20,  51 => 13,  26 => 3,  150 => 43,  135 => 54,  94 => 33,  85 => 28,  61 => 17,  47 => 11,  34 => 5,  157 => 55,  133 => 44,  130 => 48,  113 => 40,  104 => 38,  90 => 32,  79 => 28,  62 => 16,  59 => 15,  32 => 6,  29 => 4,  24 => 3,  81 => 26,  73 => 21,  56 => 14,  54 => 14,  48 => 10,  45 => 9,  42 => 10,  36 => 8,  332 => 137,  329 => 136,  323 => 135,  321 => 134,  314 => 133,  310 => 132,  306 => 130,  304 => 129,  301 => 128,  298 => 127,  296 => 126,  288 => 124,  286 => 123,  282 => 121,  276 => 117,  238 => 99,  236 => 98,  231 => 95,  229 => 94,  224 => 91,  222 => 90,  217 => 87,  213 => 85,  203 => 81,  201 => 80,  196 => 79,  194 => 76,  189 => 77,  183 => 69,  180 => 68,  177 => 67,  175 => 66,  170 => 56,  161 => 61,  158 => 57,  156 => 56,  145 => 56,  142 => 48,  126 => 39,  123 => 44,  120 => 39,  118 => 36,  114 => 34,  103 => 36,  97 => 34,  92 => 37,  72 => 17,  66 => 19,  52 => 12,  69 => 20,  63 => 18,  58 => 16,  37 => 12,  20 => 1,  139 => 47,  131 => 44,  128 => 43,  121 => 40,  115 => 39,  107 => 36,  99 => 34,  96 => 34,  91 => 31,  87 => 28,  84 => 28,  82 => 27,  75 => 24,  67 => 19,  57 => 15,  50 => 12,  44 => 10,  39 => 8,  33 => 7,  30 => 4,  27 => 6,  271 => 114,  262 => 111,  258 => 110,  255 => 109,  250 => 108,  248 => 107,  235 => 107,  228 => 103,  221 => 99,  214 => 95,  207 => 83,  200 => 87,  185 => 76,  178 => 71,  171 => 67,  164 => 59,  154 => 45,  151 => 53,  143 => 49,  140 => 52,  137 => 51,  132 => 49,  129 => 50,  125 => 36,  119 => 34,  111 => 37,  109 => 39,  106 => 35,  100 => 39,  95 => 30,  89 => 29,  86 => 28,  83 => 26,  80 => 26,  77 => 25,  74 => 21,  71 => 21,  68 => 20,  65 => 18,  60 => 16,  55 => 13,  49 => 11,  46 => 10,  43 => 12,  41 => 9,  38 => 8,  35 => 7,  31 => 4,  28 => 3,);
    }
}
